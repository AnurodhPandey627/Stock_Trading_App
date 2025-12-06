// middleware/AuthMiddleware.js
const {UserModel} = require("../models/UserModel");
const jwt = require("jsonwebtoken");

module.exports.userAuth = async (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) {
      return res.status(401).json({ status: false, message: "Not authenticated" });
    }

    jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
      if (err) {
        return res.status(401).json({ status: false, message: "Invalid token" });
      }

      const user = await UserModel.findById(data.id).select("-password");
      if (!user) {
        return res.status(401).json({ status: false, message: "User not found" });
      }

      //Attach user to request object so routes can use it
      req.user = user;
      next(); //move to actual route handler
    });
  } catch (err) {
    console.error("Auth error:", err);
    return res.status(500).json({ status: false, message: "Server error" });
  }
};

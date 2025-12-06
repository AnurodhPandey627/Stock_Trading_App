const { Signup,Login,Verify, Logout } = require("../controllers/AuthController");
const {userAuth} = require("../middlewares/AuthMiddleware");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login",Login);
router.get("/verify",userAuth,Verify);
router.get("/logout",Logout);

module.exports = router;
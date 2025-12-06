import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true, // send/receive cookies
});

export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);
export const verifyUser = () => API.get("/auth/verify");

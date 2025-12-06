import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3002",
  withCredentials: true,
});

export const verifyUser = () => API.get("/auth/verify");
export const logout = () => API.get("/auth/logout");
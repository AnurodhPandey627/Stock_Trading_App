import axios from "axios";

const API = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
});

export const verifyUser = () => API.get("/auth/verify",{withCredentials:true});
export const logout = () => API.get("/auth/logout");
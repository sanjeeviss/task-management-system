import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5074/api",  // your backend
  withCredentials: true,                 // for cookies/session
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;

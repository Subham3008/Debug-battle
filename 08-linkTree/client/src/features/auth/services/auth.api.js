import axios from "axios";

const authApi = axios.create({
  baseURL: "/api/auth",
  withCredentials: true,
});

export const registerUser = async (payload) => {
  const response = await authApi.post("/register", payload);
  return response.data;
};

export const loginUser = async (payload) => {
  const response = await authApi.post("/login", payload);
  return response.data;
};


import axios from "axios";

const analyticsApi = axios.create({
  baseURL: "/api/link",
  withCredentials: true,
});

export const getAnalytics = async ({ username }) => {
  const response = await analyticsApi.get(`/${username}/analytics`);
  return response.data;
};

export const createLink = async ({ title, url }) => {
  const response = await analyticsApi.post("/", { title, url });
  return response.data;
};

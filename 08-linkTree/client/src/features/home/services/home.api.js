import axios from "axios";

const linksApiInstance = axios.create({
  baseURL: "/api/links",
});

export const getLinks = async ({ username }) => {
  const response = await linksApiInstance.get(`/${username}`);
  return response.data;
};

export const incrementLinkClick = async ({ linkId }) => {
  const response = await linksApiInstance.patch(`/${linkId}/click`);
  return response.data;
};

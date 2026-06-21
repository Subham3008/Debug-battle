import axios from "axios";

const linksApiInstance = axios.create({
  baseURL: '/api/links'
})

export const getLinks = async ({ username }) => {
  const response = await linksApiInstance.get(`/${username}`)
  console.log(response.data);
  return response.data

}
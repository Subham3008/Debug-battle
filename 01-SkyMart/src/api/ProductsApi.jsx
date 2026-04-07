import { AxiosInstance } from "../config/AxioInstance";

let cacheData = null;

export let getAllProducts = async () => {
  if (cacheData) {
    return cacheData;
  }
  try {
    let res = await AxiosInstance.get(`/products`);
    cacheData = res.data.products;
    return res.data.products;
  } catch (error) {
    console.log("Api fetched error from productApi -->", error);
    return [];
  }
};

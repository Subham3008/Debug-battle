import axios from "axios";

let cacheData = null;

export let getAllProducts = async () => {
  if (cacheData) {
    return cacheData;
  }
  try {
    let res = await axios.get(`https://dummyjson.com/products`);
    cacheData = res.data.products;
    return res.data.products;
  } catch (error) {
    console.log("Api fetched error -->", error);
  }
};

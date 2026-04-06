import axios from "axios";

let catchData = null;
export let getAllProductCategory = async () => {
  if (catchData) {
    return catchData;
  }
  try {
    let res = await axios.get(`https://dummyjson.com/products/category-list`);
    catchData = res.data.products;
    return res.data.products;
  } catch (error) {
    console.log("Api fetched error -->", error);
  }
};

import axios from "axios";
import { base_url } from "../../utils/base_url";

const getProductCategories=async()=>{
    const response=await axios.get(`${base_url}category`) //this is api path from router
    return response.data
}
const ProductcategoriesServices= {
    getProductCategories,
  };
  //This module exports a function getProductCategories that makes an API call to fetch product categories using Axios.
  
  export default ProductcategoriesServices;
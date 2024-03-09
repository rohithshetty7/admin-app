import axios from "axios";
import { base_url } from "../../utils/base_url";

const getBlogsCategory=async()=>{
    const response=await axios.get(`${base_url}blogcategory`) //this is api path from router
    return response.data
}
const blogsCategory= {
    getBlogsCategory,
  };
  //This module exports a function getBlogs that makes an API call to fetch product categories using Axios.
  
  export default blogsCategory;
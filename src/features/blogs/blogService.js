import axios from "axios";
import { base_url } from "../../utils/base_url";

const getBlogs=async()=>{
    const response=await axios.get(`${base_url}blog`) //this is api path from router
    return response.data
}
const blogService= {
    getBlogs,
  };
  //This module exports a function getBlogs that makes an API call to fetch product categories using Axios.
  
  export default blogService;
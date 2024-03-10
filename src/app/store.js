import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandsReducer from "../features/brand/brandSlice";
import colorsReducer from "../features/color/colorSlice";
import productCategoriesReducer from "../features/productCategery/productCatSlice";
import blogsReducer from "../features/blogs/blogSlice";
import blogsCategoryReducer from "../features/blogsCategory/blogsCategorySlice"
import enquiryReducer from "../features/enquiry/enquirySlice"
import orderReducer from "../features/order/orderSlice"

export const store = configureStore({
    reducer: {
        auth: authReducer,
        customer: customerReducer,
        product: productReducer,
        brand: brandsReducer,
        color: colorsReducer,
        productsCategories: productCategoriesReducer,
        blogs: blogsReducer,
        blogsCategory: blogsCategoryReducer,
        enquiry: enquiryReducer,
        order: orderReducer

    },
});

/*
Redux store configuration, you include productCategoriesReducer
 in the reducer field under the key productsCategories.
*/

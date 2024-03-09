import { configureStore } from "@reduxjs/toolkit"
import authReducer from "../features/auth/authSlice";
import customerReducer from "../features/customers/customerSlice";
import productReducer from "../features/product/productSlice";
import brandsReducer from "../features/brand/brandSlice";
import colorsReducer from "../features/color/colorSlice";
import productCategoriesReducer from "../features/productCategery/productCatSlice";


export const store = configureStore({
    reducer: { auth: authReducer, customer: customerReducer, product: productReducer, brand: brandsReducer, color: colorsReducer, productsCategories: productCategoriesReducer }
})

/*
Redux store configuration, you include productCategoriesReducer
 in the reducer field under the key productsCategories.
*/
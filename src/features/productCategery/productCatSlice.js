/*
This slice defines the state, actions, and reducers for managing product 
categories in your Redux store. The async thunk getProductsCategories 
is responsible for fetching product categories using the service function.
*/

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProductcategoriesServices from "./productCatService";
export const getProductsCategories = createAsyncThunk(
  "productsCat/get-productCate",
  async (thunkAPI) => {
    try {
      return await ProductcategoriesServices.getProductCategories();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  productsCategories: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const productCategoriesSlice = createSlice({
  name: "productsCategories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getProductsCategories.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(getProductsCategories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.productsCategories = action.payload;
      })
      .addCase(getProductsCategories.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.productsCategories = action.error;
      });
  },
});
export default productCategoriesSlice.reducer;

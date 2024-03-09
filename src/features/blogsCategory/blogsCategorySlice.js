import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import blogsCategory from "./blogsCategoryService";

export const getBlogsCategory = createAsyncThunk(
  "blogcategory/get-blogcategory",
  async (thunkAPI) => {
    try {
      return await blogsCategory.getBlogsCategory();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
const initialState = {
  blogsCategory: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
const blogsCategorySlice = createSlice({
  name: "blogsCategory",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBlogsCategory.pending,(state) => {
        state.isLoading = true;
      })
      .addCase(getBlogsCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.blogsCategory = action.payload;
      })
      .addCase(getBlogsCategory.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = true;
        state.blogsCategory = action.error;
      });
  },
});
export default blogsCategorySlice.reducer;

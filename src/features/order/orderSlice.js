import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import orderService from "./orderService";
export const getOrders = createAsyncThunk("order/get-order", async (thunkAPI) => {
  try {
    return await orderService.getOrders();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }

})
const initialState = {
  order: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const enquirySlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getOrders.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getOrders.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.order = action.payload;
      })
      .addCase(getOrders.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default enquirySlice.reducer;
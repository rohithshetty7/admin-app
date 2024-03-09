import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import enquiryService from "./enquiryService";
export const getEnquiries = createAsyncThunk("enquiry/get-enquiries", async (thunkAPI) => {
  try {
    return await enquiryService.getEnquiry();
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }

})
const initialState = {
  Enquiry: [],
  isError: false,
  isLoading: false,
  isSuccess: false,
  message: "",
};
export const enquirySlice = createSlice({
  name: "Enquiry",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getEnquiries.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getEnquiries.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isError = false;
        state.isSuccess = true;
        state.Enquiry = action.payload;
      })
      .addCase(getEnquiries.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.isSuccess = false;
        state.message = action.error;
      });
  },
});
export default enquirySlice.reducer;
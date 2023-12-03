import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchProduct = createAsyncThunk('home/products', async () => {
  const response = await axios.get('https://hrishabh-e-commerce.onrender.com/product')
  return response.data
})

const initialState = {
  data: [],
  loading: true,
  error: null
}

const ProductSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    })
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error
    })
  }
})

export { fetchProduct }
export default ProductSlice.reducer
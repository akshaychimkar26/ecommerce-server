import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const fetchCart = createAsyncThunk('cart/get', async (userId) => {
  const response = await axios.get(`https://hrishabh-e-commerce.onrender.com/cart/${userId}`)
  return response.data
})

const initialState = {
  data: [],
  loading: true,
  error: null
}

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const product = action.payload
      const userName = JSON.parse(localStorage.getItem("User"))
      axios.post(`https://hrishabh-e-commerce.onrender.com/cart/${userName._id}/${product._id}`)
      const existingProduct = state.data.find((p) => p.productId._id === product._id)
      if (!existingProduct) {
        state.data.push({
          productId: product,
          quantity: 1,
        })
        return
      }

      existingProduct.quantity += 1;
    },
    removeToCart: (state, action) => {
      const product = action.payload
      const userName = JSON.parse(localStorage.getItem("User"))
      axios.put(`https://hrishabh-e-commerce.onrender.com/cart/${userName._id}/${product._id}`)
      const existingProduct = state.data.find((p) => p.productId._id === product._id)
      if (existingProduct) {
        if (existingProduct.quantity > 1) {
          existingProduct.quantity -= 1;
          return
        }
        state.data = state.data.filter((item) => item.productId._id !== product._id)
      }
    },
    deleteFromCart: (state, action) => {
      const product = action.payload
      const userName = JSON.parse(localStorage.getItem("User"))
      state.data = state.data.filter((item) => item.productId._id !== product._id)
      axios.delete(`https://hrishabh-e-commerce.onrender.com/cart/${userName._id}/${product._id}`)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.loading = true;
    })
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload.cart;
    })
    builder.addCase(fetchCart.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error
    })
  }
})

export { fetchCart }
export const { addToCart, deleteFromCart, removeToCart } = CartSlice.actions
export default CartSlice.reducer
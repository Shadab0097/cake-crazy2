import { configureStore } from '@reduxjs/toolkit'
import productReducer from './slices/productSlice'
import cartReducer from './slices/cartSlice'
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
    filter: filterReducer
  },
})
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { productsData } from '../../data/products'

export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // In a real app, this would be an API call
      // For our mock, we'll just return the local data with a delay
      await new Promise(resolve => setTimeout(resolve, 500))
      return productsData
    } catch (error) {
      return rejectWithValue('Failed to fetch products')
    }
  }
)

const initialState = {
  items: [],
  featuredItems: [],
  status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
  error: null
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.items = action.payload
        // Set featured items (first 6 items with isFeatured flag)
        state.featuredItems = action.payload
          .filter(product => product.isFeatured)
          .slice(0, 6)
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
  }
})

export default productSlice.reducer
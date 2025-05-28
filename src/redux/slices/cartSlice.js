import { createSlice } from '@reduxjs/toolkit'

// Load initial state from localStorage
const loadCartFromStorage = () => {
  try {
    const savedCart = localStorage.getItem('cart')
    return savedCart ? JSON.parse(savedCart) : { items: [], total: 0 }
  } catch (error) {
    console.error('Error loading cart from localStorage:', error)
    return { items: [], total: 0 }
  }
}

const initialState = loadCartFromStorage()

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, quantity = 1, customizations = {} } = action.payload
      const existingItem = state.items.find(item => 
        item.id === id && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
      )
      
      if (existingItem) {
        existingItem.quantity += quantity
      } else {
        state.items.push({
          ...action.payload,
          quantity
        })
      }
      
      // Recalculate total
      state.total = state.items.reduce(
        (sum, item) => sum + (item.price * item.quantity), 
        0
      )

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
    
    removeFromCart: (state, action) => {
      const { id, customizations = {} } = action.payload
      state.items = state.items.filter(item => 
        !(item.id === id && 
          JSON.stringify(item.customizations) === JSON.stringify(customizations))
      )
      
      // Recalculate total
      state.total = state.items.reduce(
        (sum, item) => sum + (item.price * item.quantity), 
        0
      )

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
    
    updateCartItem: (state, action) => {
      const { id, quantity, customizations = {} } = action.payload
      const item = state.items.find(item => 
        item.id === id && 
        JSON.stringify(item.customizations) === JSON.stringify(customizations)
      )
      
      if (item) {
        item.quantity = quantity
      }
      
      // Recalculate total
      state.total = state.items.reduce(
        (sum, item) => sum + (item.price * item.quantity), 
        0
      )

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify(state))
    },
    
    clearCart: (state) => {
      state.items = []
      state.total = 0

      // Clear localStorage
      localStorage.removeItem('cart')
    }
  }
})

export const { addToCart, removeFromCart, updateCartItem, clearCart } = cartSlice.actions

export default cartSlice.reducer
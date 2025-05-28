import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  category: null,
  priceRange: [0, 5000],
  sortBy: 'popularity',
  searchQuery: '',
  filters: {
    flavors: [],
    weights: [],
    tags: [],
    type: null, // 'gourmet', 'regular', 'eggless', 'premium'
    occasion: null
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload
    },
    setProductType: (state, action) => {
      state.filters.type = action.payload
    },
    setOccasion: (state, action) => {
      state.filters.occasion = action.payload
    },
    toggleFilterItem: (state, action) => {
      const { filterType, value } = action.payload
      const currentFilters = state.filters[filterType]
      
      if (Array.isArray(currentFilters)) {
        if (currentFilters.includes(value)) {
          state.filters[filterType] = currentFilters.filter(item => item !== value)
        } else {
          state.filters[filterType].push(value)
        }
      }
    },
    clearFilters: () => initialState
  }
})

export const { 
  setCategory, 
  setPriceRange, 
  setSortBy, 
  setSearchQuery,
  setProductType,
  setOccasion,
  toggleFilterItem, 
  clearFilters 
} = filterSlice.actions

export default filterSlice.reducer
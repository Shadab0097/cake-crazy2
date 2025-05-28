import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/products/ProductCard'
import { setCategory, setPriceRange, setSortBy, clearFilters } from '../redux/slices/filterSlice'

const CatalogPage = () => {
  const [searchParams] = useSearchParams()
  const dispatch = useDispatch()
  
  const { items } = useSelector(state => state.products)
  const filters = useSelector(state => state.filter)
  
  const [filteredProducts, setFilteredProducts] = useState([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  
  // Get category and search query from URL params
  useEffect(() => {
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl) {
      dispatch(setCategory(categoryFromUrl))
    }
  }, [searchParams, dispatch])
  
  // Filter options
  const categories = [
    { id: 'gourmet', name: 'Gourmet' },
    { id: 'regular', name: 'Regular' },
    { id: 'eggless', name: 'Eggless' },
    { id: 'premium', name: 'Premium' }
  ]

  const flavors = [
    'Chocolate',
    'Vanilla',
    'Butterscotch',
    'Red Velvet',
    'Mango',
    'Blueberry',
    'Strawberry',
    'Pineapple'
  ]

  const occasions = [
    'Birthday',
    'Anniversary',
    'Wedding',
    'Graduation',
    'Baby Shower',
    'Corporate'
  ]

  const weights = [
    '0.5 kg',
    '1 kg',
    '1.5 kg',
    '2 kg'
  ]

  const priceRanges = [
    { min: 0, max: 499, label: 'Under ₹499' },
    { min: 500, max: 999, label: '₹500 - ₹999' },
    { min: 1000, max: 1499, label: '₹1000 - ₹1499' },
    { min: 1500, max: 99999, label: '₹1500 & Above' }
  ]

  const sortOptions = [
    { value: 'popularity', label: 'Popularity' },
    { value: 'priceAsc', label: 'Price: Low to High' },
    { value: 'priceDesc', label: 'Price: High to Low' },
    { value: 'rating', label: 'Average Rating' },
    { value: 'newest', label: 'Newest First' }
  ]
  
  useEffect(() => {
    let result = [...items]
    
    // Apply search filter
    const searchQuery = searchParams.get('search')
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(product => 
        product.name.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.flavors.some(flavor => flavor.toLowerCase().includes(query))
      )
    }
    
    // Apply category filter from URL
    const categoryFromUrl = searchParams.get('category')
    if (categoryFromUrl) {
      result = result.filter(product => 
        product.category === categoryFromUrl || 
        product.tags.includes(categoryFromUrl)
      )
    }
    // Apply other filters
    else if (filters.category) {
      result = result.filter(product => product.category === filters.category)
    }
    
    // Apply price range
    result = result.filter(product => 
      product.price >= filters.priceRange[0] && 
      product.price <= filters.priceRange[1]
    )
    
    // Apply sorting
    switch (filters.sortBy) {
      case 'priceAsc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'priceDesc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'newest':
        result.sort((a, b) => b.id - a.id)
        break
      default:
        result.sort((a, b) => b.rating * b.reviewCount - a.rating * a.reviewCount)
    }
    
    setFilteredProducts(result)
  }, [items, filters, searchParams])

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">
            {searchParams.get('search')
              ? `Search Results for "${searchParams.get('search')}"`
              : searchParams.get('category')
                ? searchParams.get('category').split('-').map(word => 
                    word.charAt(0).toUpperCase() + word.slice(1)
                  ).join(' ') + ' Cakes'
                : 'All Cakes'
            }
          </h1>
          <div className="flex items-center gap-4">
            <button 
              className="lg:hidden px-4 py-2 border rounded-lg bg-white"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              Filters
            </button>
            <div className="relative">
              <select
                value={filters.sortBy}
                onChange={(e) => dispatch(setSortBy(e.target.value))}
                className="appearance-none bg-white border rounded-lg px-4 py-2 pr-8"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-8">
          {/* Filters Sidebar */}
          <div className={`lg:w-1/4 bg-white rounded-lg p-6 shadow-sm ${
            isFilterOpen ? 'fixed inset-0 z-50 lg:relative lg:inset-auto' : 'hidden lg:block'
          }`}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold">Filters</h2>
              <button 
                className="lg:hidden"
                onClick={() => setIsFilterOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Categories */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Categories</h3>
              <div className="space-y-2">
                {categories.map(category => (
                  <label key={category.id} className="flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-primary-500"
                      checked={filters.category === category.id}
                      onChange={() => dispatch(setCategory(category.id))}
                    />
                    <span className="ml-2 text-gray-700">{category.name}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Price Range</h3>
              <div className="space-y-2">
                {priceRanges.map((range, index) => (
                  <label key={index} className="flex items-center">
                    <input
                      type="radio"
                      name="price"
                      className="form-radio h-4 w-4 text-primary-500"
                      checked={filters.priceRange[0] === range.min && filters.priceRange[1] === range.max}
                      onChange={() => dispatch(setPriceRange([range.min, range.max]))}
                    />
                    <span className="ml-2 text-gray-700">{range.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Flavors */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Flavors</h3>
              <div className="flex flex-wrap gap-2">
                {flavors.map(flavor => (
                  <button
                    key={flavor}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.filters.flavors.includes(flavor.toLowerCase())
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => dispatch({
                      type: 'filter/toggleFilterItem',
                      payload: { filterType: 'flavors', value: flavor.toLowerCase() }
                    })}
                  >
                    {flavor}
                  </button>
                ))}
              </div>
            </div>

            {/* Occasions */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Occasions</h3>
              <div className="flex flex-wrap gap-2">
                {occasions.map(occasion => (
                  <button
                    key={occasion}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.filters.tags.includes(occasion.toLowerCase())
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => dispatch({
                      type: 'filter/toggleFilterItem',
                      payload: { filterType: 'tags', value: occasion.toLowerCase() }
                    })}
                  >
                    {occasion}
                  </button>
                ))}
              </div>
            </div>

            {/* Weight */}
            <div className="mb-6">
              <h3 className="font-medium mb-3">Weight</h3>
              <div className="flex flex-wrap gap-2">
                {weights.map(weight => (
                  <button
                    key={weight}
                    className={`px-3 py-1 rounded-full text-sm ${
                      filters.filters.weights.includes(weight)
                        ? 'bg-primary-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                    onClick={() => dispatch({
                      type: 'filter/toggleFilterItem',
                      payload: { filterType: 'weights', value: weight }
                    })}
                  >
                    {weight}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={() => dispatch(clearFilters())}
              className="w-full py-2 text-primary-500 border border-primary-500 rounded-lg hover:bg-primary-50"
            >
              Clear All Filters
            </button>
          </div>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 mb-4">No products match your filters</p>
                <button
                  onClick={() => dispatch(clearFilters())}
                  className="text-primary-500 font-medium hover:underline"
                >
                  Clear all filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CatalogPage
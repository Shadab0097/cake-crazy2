import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { FiShoppingBag, FiMenu, FiX, FiSearch, FiUser } from 'react-icons/fi'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearchResults, setShowSearchResults] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const searchRef = useRef(null)
  
  const cartItems = useSelector(state => state.cart.items)
  const products = useSelector(state => state.products.items)
  const cartItemCount = cartItems.reduce((total, item) => total + item.quantity, 0)
  
  // Filter products and categories based on search query
  const searchResults = searchQuery.trim() !== '' ? {
    products: products.filter(product => 
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.flavors.some(flavor => flavor.toLowerCase().includes(searchQuery.toLowerCase()))
    ).slice(0, 5),
    categories: [
      'birthday', 'anniversary', 'wedding', 'custom', 'photo', 'theme', 
      'kids', 'brothers-day', 'relationship', 'desserts', 'hampers'
    ].filter(category => 
      category.toLowerCase().includes(searchQuery.toLowerCase())
    ).slice(0, 3)
  } : { products: [], categories: [] }
  
  // Check if page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false)
    setSearchQuery('')
    setShowSearchResults(false)
  }, [location])

  // Handle click outside search results
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSearchResults(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])
  
  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      navigate(`/catalog?search=${encodeURIComponent(searchQuery)}`)
      setSearchQuery('')
      setShowSearchResults(false)
    }
  }

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value)
    setShowSearchResults(true)
  }
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white bg-opacity-95'}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold font-display text-primary-600">
              Cake Crazy
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-500'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/catalog" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-500'}`
              }
            >
              Cakes
            </NavLink>
            <NavLink 
              to="/catalog?category=birthday" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-500'}`
              }
            >
              Birthday
            </NavLink>
            <NavLink 
              to="/catalog?category=anniversary" 
              className={({ isActive }) => 
                `font-medium transition-colors ${isActive ? 'text-primary-600' : 'text-neutral-700 hover:text-primary-500'}`
              }
            >
              Anniversary
            </NavLink>
          </nav>
          
          {/* Search, Cart, Account - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="relative" ref={searchRef}>
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  placeholder="Search cakes..."
                  className="pl-3 pr-10 py-2 rounded-full border border-neutral-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 w-44 lg:w-56"
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  onFocus={() => setShowSearchResults(true)}
                />
                <button 
                  type="submit"
                  className="absolute right-3 text-neutral-500 hover:text-primary-500"
                >
                  <FiSearch size={18} />
                </button>
              </form>

              {/* Search Results Dropdown */}
              {showSearchResults && (searchResults.products.length > 0 || searchResults.categories.length > 0) && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-lg shadow-lg border border-neutral-200 overflow-hidden">
                  {searchResults.categories.length > 0 && (
                    <div className="p-2 border-b border-neutral-100">
                      <p className="text-xs text-neutral-500 px-2 mb-1">Categories</p>
                      {searchResults.categories.map((category, index) => (
                        <Link
                          key={index}
                          to={`/catalog?category=${category}`}
                          className="block px-2 py-1.5 text-sm hover:bg-neutral-50 rounded"
                          onClick={() => setShowSearchResults(false)}
                        >
                          {category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Cakes
                        </Link>
                      ))}
                    </div>
                  )}
                  
                  {searchResults.products.length > 0 && (
                    <div className="p-2">
                      <p className="text-xs text-neutral-500 px-2 mb-1">Products</p>
                      {searchResults.products.map(product => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          className="flex items-center px-2 py-1.5 hover:bg-neutral-50 rounded"
                          onClick={() => setShowSearchResults(false)}
                        >
                          <img 
                            src={product.images[0]} 
                            alt={product.name}
                            className="w-8 h-8 rounded object-cover"
                          />
                          <div className="ml-2">
                            <p className="text-sm font-medium">{product.name}</p>
                            <p className="text-xs text-neutral-500">₹{product.price}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
            
            <Link to="/cart" className="relative">
              <FiShoppingBag size={24} className="text-neutral-700 hover:text-primary-500 transition-colors" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button className="text-neutral-700 hover:text-primary-500 transition-colors">
              <FiUser size={24} />
            </button>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <Link to="/cart" className="relative">
              <FiShoppingBag size={24} className="text-neutral-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>
            
            <button 
              onClick={handleMenuToggle}
              className="text-neutral-700 focus:outline-none"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
        <div className="container-custom py-4 space-y-6 border-t border-neutral-100">
          <form onSubmit={handleSearch} className="flex items-center relative">
            <input
              type="text"
              placeholder="Search cakes..."
              className="pl-3 pr-10 py-2 rounded-full border border-neutral-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300 w-full"
              value={searchQuery}
              onChange={handleSearchInputChange}
            />
            <button 
              type="submit"
              className="absolute right-3 text-neutral-500"
            >
              <FiSearch size={18} />
            </button>
          </form>
          
          <nav className="flex flex-col space-y-4">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `font-medium text-lg py-2 ${isActive ? 'text-primary-600' : 'text-neutral-700'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/catalog" 
              className={({ isActive }) => 
                `font-medium text-lg py-2 ${isActive ? 'text-primary-600' : 'text-neutral-700'}`
              }
            >
              All Cakes
            </NavLink>
            <NavLink 
              to="/catalog?category=birthday" 
              className={({ isActive }) => 
                `font-medium text-lg py-2 ${isActive ? 'text-primary-600' : 'text-neutral-700'}`
              }
            >
              Birthday Cakes
            </NavLink>
            <NavLink 
              to="/catalog?category=anniversary" 
              className={({ isActive }) => 
                `font-medium text-lg py-2 ${isActive ? 'text-primary-600' : 'text-neutral-700'}`
              }
            >
              Anniversary Cakes
            </NavLink>
            <div className="pt-2 border-t border-neutral-100">
              <button className="flex items-center font-medium text-lg py-2 text-neutral-700">
                <FiUser size={20} className="mr-2" />
                Account
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
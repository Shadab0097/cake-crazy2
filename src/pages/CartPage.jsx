import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromCart, updateCartItem, clearCart } from '../redux/slices/cartSlice'

const CartPage = () => {
  const { items, total } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [couponCode, setCouponCode] = useState('')
  const [couponError, setCouponError] = useState('')
  const [discount, setDiscount] = useState(0)
  
  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity >= 1 && newQuantity <= 10) {
      dispatch(updateCartItem({
        id: item.id,
        quantity: newQuantity,
        customizations: item.customizations
      }))
    }
  }
  
  const handleRemoveItem = (item) => {
    dispatch(removeFromCart({
      id: item.id,
      customizations: item.customizations
    }))
  }
  
  const handleClearCart = () => {
    dispatch(clearCart())
  }
  
  const handleApplyCoupon = (e) => {
    e.preventDefault()
    
    // Simple coupon logic for demo purposes
    if (couponCode.toUpperCase() === 'WELCOME10') {
      setDiscount(Math.round(total * 0.1)) // 10% discount
      setCouponError('')
    } else if (couponCode.toUpperCase() === 'FLAT100') {
      setDiscount(100)
      setCouponError('')
    } else {
      setDiscount(0)
      setCouponError('Invalid coupon code')
    }
  }
  
  const deliveryFee = total > 500 ? 0 : 50
  const grandTotal = total + deliveryFee - discount
  
  // Empty cart state
  if (items.length === 0) {
    return (
      <div className="py-16">
        <div className="container-custom">
          <div className="text-center py-8">
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-neutral-600 mb-8">
              Looks like you haven't added any cakes to your cart yet.
            </p>
            <Link to="/catalog" className="btn btn-primary">
              Browse Our Cakes
            </Link>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 lg:mb-0">
              <div className="p-6">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-4">{items.length} Item{items.length > 1 ? 's' : ''}</h2>
                  
                  <div className="space-y-6">
                    {items.map((item, index) => (
                      <div key={`${item.id}-${index}`} className="flex flex-col sm:flex-row border-b border-neutral-200 pb-6">
                        <div className="sm:w-24 sm:h-24 mb-4 sm:mb-0">
                          <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover rounded-lg"
                          />
                        </div>
                        
                        <div className="flex-grow sm:ml-4">
                          <div className="flex flex-col sm:flex-row sm:justify-between mb-2">
                            <h3 className="font-semibold text-lg">{item.name}</h3>
                            <p className="font-bold text-lg">₹{item.price * item.quantity}</p>
                          </div>
                          
                          <div className="text-sm text-neutral-600 mb-4">
                            <p>Weight: {item.customizations.weight}</p>
                            {item.customizations.shape && <p>Shape: {item.customizations.shape}</p>}
                            {item.customizations.message && <p>Message: "{item.customizations.message}"</p>}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <button 
                                className="w-8 h-8 border border-neutral-300 rounded-l-md flex items-center justify-center hover:bg-neutral-100"
                                onClick={() => handleQuantityChange(item, item.quantity - 1)}
                                disabled={item.quantity <= 1}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                                </svg>
                              </button>
                              <div className="w-10 h-8 border-t border-b border-neutral-300 flex items-center justify-center">
                                {item.quantity}
                              </div>
                              <button 
                                className="w-8 h-8 border border-neutral-300 rounded-r-md flex items-center justify-center hover:bg-neutral-100"
                                onClick={() => handleQuantityChange(item, item.quantity + 1)}
                                disabled={item.quantity >= 10}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                            
                            <button 
                              className="text-error-500 hover:text-error-600 text-sm"
                              onClick={() => handleRemoveItem(item)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <button 
                    className="text-neutral-600 hover:text-neutral-800 text-sm"
                    onClick={handleClearCart}
                  >
                    Clear Cart
                  </button>
                  
                  <Link to="/catalog" className="text-primary-600 hover:text-primary-700 text-sm">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Subtotal</span>
                    <span>₹{total}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-neutral-600">Delivery Fee</span>
                    <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-success-500">
                      <span>Discount</span>
                      <span>- ₹{discount}</span>
                    </div>
                  )}
                  <div className="border-t border-neutral-200 pt-3">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>₹{grandTotal}</span>
                    </div>
                  </div>
                </div>
                
                <form onSubmit={handleApplyCoupon} className="mb-6">
                  <label htmlFor="coupon" className="block text-sm font-medium text-neutral-700 mb-2">
                    Apply Coupon Code
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="coupon"
                      className="flex-grow px-3 py-2 border border-neutral-300 rounded-l-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                    />
                    <button 
                      type="submit"
                      className="px-4 py-2 bg-neutral-800 text-white rounded-r-md hover:bg-neutral-700"
                    >
                      Apply
                    </button>
                  </div>
                  {couponError && <p className="text-xs text-error-500 mt-1">{couponError}</p>}
                  {discount > 0 && <p className="text-xs text-success-500 mt-1">Coupon applied successfully!</p>}
                </form>
                
                <button 
                  onClick={() => navigate('/checkout')}
                  className="btn btn-primary w-full"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartPage
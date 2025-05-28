import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { clearCart } from '../redux/slices/cartSlice'

const CheckoutPage = () => {
  const { items, total } = useSelector(state => state.cart)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    deliveryDate: '',
    deliveryTime: '10:00-13:00',
    paymentMethod: 'card'
  })
  
  const [formErrors, setFormErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [orderComplete, setOrderComplete] = useState(false)
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field if it exists
    if (formErrors[name]) {
      setFormErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const validateForm = () => {
    const errors = {}
    
    if (!formData.firstName.trim()) errors.firstName = 'First name is required'
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required'
    if (!formData.email.trim()) {
      errors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Email is invalid'
    }
    if (!formData.phone.trim()) {
      errors.phone = 'Phone number is required'
    } else if (!/^[0-9]{10}$/.test(formData.phone.replace(/\s/g, ''))) {
      errors.phone = 'Phone number is invalid'
    }
    if (!formData.address.trim()) errors.address = 'Address is required'
    if (!formData.city.trim()) errors.city = 'City is required'
    if (!formData.state.trim()) errors.state = 'State is required'
    if (!formData.postalCode.trim()) {
      errors.postalCode = 'Postal code is required'
    } else if (!/^[0-9]{6}$/.test(formData.postalCode.replace(/\s/g, ''))) {
      errors.postalCode = 'Postal code is invalid'
    }
    if (!formData.deliveryDate) errors.deliveryDate = 'Delivery date is required'
    
    return errors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const errors = validateForm()
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors)
      return
    }
    
    setIsSubmitting(true)
    
    // Simulate order processing
    setTimeout(() => {
      setIsSubmitting(false)
      setOrderComplete(true)
      dispatch(clearCart())
      
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: '',
        state: '',
        postalCode: '',
        deliveryDate: '',
        deliveryTime: '10:00-13:00',
        paymentMethod: 'card'
      })
    }, 2000)
  }
  
  // Redirect to home if cart is empty and not after order completion
  if (items.length === 0 && !orderComplete) {
    navigate('/')
    return null
  }
  
  // Calculate prices
  const deliveryFee = total > 500 ? 0 : 50
  const grandTotal = total + deliveryFee
  
  // Order complete screen
  if (orderComplete) {
    return (
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-6 text-success-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h1 className="text-3xl font-bold mb-4">Thank You For Your Order!</h1>
            <p className="text-neutral-600 mb-8">
              Your order has been placed successfully. We will deliver your delicious cake on your selected date.
            </p>
            <p className="text-lg font-semibold mb-2">
              Order Total: ₹{grandTotal}
            </p>
            <p className="text-sm text-neutral-500 mb-8">
              A confirmation email has been sent to {formData.email}
            </p>
            <button 
              onClick={() => navigate('/')}
              className="btn btn-primary"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    )
  }
  
  return (
    <div className="py-12">
      <div className="container-custom">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>
        
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden mb-6 lg:mb-0">
              <div className="p-6">
                <form onSubmit={handleSubmit}>
                  <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-neutral-700 mb-1">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.firstName ? 'border-error-500' : 'border-neutral-300'
                        }`}
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                      {formErrors.firstName && <p className="text-xs text-error-500 mt-1">{formErrors.firstName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-neutral-700 mb-1">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.lastName ? 'border-error-500' : 'border-neutral-300'
                        }`}
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                      {formErrors.lastName && <p className="text-xs text-error-500 mt-1">{formErrors.lastName}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.email ? 'border-error-500' : 'border-neutral-300'
                        }`}
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {formErrors.email && <p className="text-xs text-error-500 mt-1">{formErrors.email}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.phone ? 'border-error-500' : 'border-neutral-300'
                        }`}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      {formErrors.phone && <p className="text-xs text-error-500 mt-1">{formErrors.phone}</p>}
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
                  
                  <div className="grid grid-cols-1 gap-4 mb-6">
                    <div>
                      <label htmlFor="address" className="block text-sm font-medium text-neutral-700 mb-1">
                        Address
                      </label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.address ? 'border-error-500' : 'border-neutral-300'
                        }`}
                        value={formData.address}
                        onChange={handleChange}
                      />
                      {formErrors.address && <p className="text-xs text-error-500 mt-1">{formErrors.address}</p>}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <label htmlFor="city" className="block text-sm font-medium text-neutral-700 mb-1">
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                            formErrors.city ? 'border-error-500' : 'border-neutral-300'
                          }`}
                          value={formData.city}
                          onChange={handleChange}
                        />
                        {formErrors.city && <p className="text-xs text-error-500 mt-1">{formErrors.city}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="state" className="block text-sm font-medium text-neutral-700 mb-1">
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                            formErrors.state ? 'border-error-500' : 'border-neutral-300'
                          }`}
                          value={formData.state}
                          onChange={handleChange}
                        />
                        {formErrors.state && <p className="text-xs text-error-500 mt-1">{formErrors.state}</p>}
                      </div>
                      
                      <div>
                        <label htmlFor="postalCode" className="block text-sm font-medium text-neutral-700 mb-1">
                          Postal Code
                        </label>
                        <input
                          type="text"
                          id="postalCode"
                          name="postalCode"
                          className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                            formErrors.postalCode ? 'border-error-500' : 'border-neutral-300'
                          }`}
                          value={formData.postalCode}
                          onChange={handleChange}
                        />
                        {formErrors.postalCode && <p className="text-xs text-error-500 mt-1">{formErrors.postalCode}</p>}
                      </div>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-4">Delivery Options</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <label htmlFor="deliveryDate" className="block text-sm font-medium text-neutral-700 mb-1">
                        Delivery Date
                      </label>
                      <input
                        type="date"
                        id="deliveryDate"
                        name="deliveryDate"
                        min={new Date().toISOString().split('T')[0]}
                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500 ${
                          formErrors.deliveryDate ? 'border-error-500' : 'border-neutral-300'
                        }`}
                        value={formData.deliveryDate}
                        onChange={handleChange}
                      />
                      {formErrors.deliveryDate && <p className="text-xs text-error-500 mt-1">{formErrors.deliveryDate}</p>}
                    </div>
                    
                    <div>
                      <label htmlFor="deliveryTime" className="block text-sm font-medium text-neutral-700 mb-1">
                        Delivery Time
                      </label>
                      <select
                        id="deliveryTime"
                        name="deliveryTime"
                        className="w-full px-3 py-2 border border-neutral-300 rounded-md focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                        value={formData.deliveryTime}
                        onChange={handleChange}
                      >
                        <option value="10:00-13:00">10:00 AM - 1:00 PM</option>
                        <option value="13:00-16:00">1:00 PM - 4:00 PM</option>
                        <option value="16:00-19:00">4:00 PM - 7:00 PM</option>
                      </select>
                    </div>
                  </div>
                  
                  <h2 className="text-xl font-semibold mb-4">Payment Method</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="card"
                        name="paymentMethod"
                        value="card"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        checked={formData.paymentMethod === 'card'}
                        onChange={handleChange}
                      />
                      <label htmlFor="card" className="ml-2 text-neutral-700">
                        Credit/Debit Card
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="upi"
                        name="paymentMethod"
                        value="upi"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        checked={formData.paymentMethod === 'upi'}
                        onChange={handleChange}
                      />
                      <label htmlFor="upi" className="ml-2 text-neutral-700">
                        UPI
                      </label>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="cod"
                        name="paymentMethod"
                        value="cod"
                        className="h-4 w-4 text-primary-600 focus:ring-primary-500"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleChange}
                      />
                      <label htmlFor="cod" className="ml-2 text-neutral-700">
                        Cash on Delivery
                      </label>
                    </div>
                  </div>
                  
                  <div className="md:hidden">
                    <button
                      type="submit"
                      className="btn btn-primary w-full"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? 'Processing...' : 'Place Order'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm overflow-hidden sticky top-28">
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
                
                <div className="space-y-4 mb-6">
                  {items.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="w-16 h-16">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          className="w-full h-full object-cover rounded"
                        />
                      </div>
                      <div className="ml-3 flex-grow">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-neutral-500">
                          {item.customizations.weight} × {item.quantity}
                        </p>
                      </div>
                      <div className="ml-2">
                        <p className="font-medium">₹{item.price * item.quantity}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-neutral-200 pt-4 mb-6">
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Subtotal</span>
                      <span>₹{total}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Delivery Fee</span>
                      <span>{deliveryFee === 0 ? 'Free' : `₹${deliveryFee}`}</span>
                    </div>
                    <div className="border-t border-neutral-200 pt-2 mt-2">
                      <div className="flex justify-between font-bold">
                        <span>Total</span>
                        <span>₹{grandTotal}</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="hidden md:block">
                  <button
                    type="submit"
                    onClick={handleSubmit}
                    className="btn btn-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Processing...' : 'Place Order'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
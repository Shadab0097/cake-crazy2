import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import AddToCartPopup from '../components/cart/AddToCartPopup'

const ProductDetailPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  
  const { items } = useSelector(state => state.products)
  const [product, setProduct] = useState(null)
  const [selectedWeight, setSelectedWeight] = useState('0.5 kg')
  const [message, setMessage] = useState('')
  const [selectedImage, setSelectedImage] = useState(0)
  const [showAddToCartPopup, setShowAddToCartPopup] = useState(false)
  
  useEffect(() => {
    if (items.length > 0) {
      const foundProduct = items.find(p => p.id === parseInt(id))
      if (foundProduct) {
        setProduct(foundProduct)
      } else {
        navigate('/catalog')
      }
    }
  }, [id, items, navigate])

  const handleAddToCart = () => {
    setShowAddToCartPopup(true)
  }

  if (!product) return null

  return (
    <>
      <div className="py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="grid grid-cols-4 gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-primary-500' : 'border-transparent'
                    }`}
                  >
                    <img 
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
              <div className="flex items-center mb-4">
                <span className="text-2xl font-bold">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="ml-2 text-gray-500 line-through">
                    ₹{product.originalPrice}
                  </span>
                )}
              </div>

              {/* Weight Selection */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Select Weight</h3>
                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedWeight('0.5 kg')}
                    className={`px-4 py-2 rounded-full border ${
                      selectedWeight === '0.5 kg'
                        ? 'border-primary-500 text-primary-500'
                        : 'border-gray-300'
                    }`}
                  >
                    0.5 Kg
                  </button>
                  <button
                    onClick={() => setSelectedWeight('1 kg')}
                    className={`px-4 py-2 rounded-full border ${
                      selectedWeight === '1 kg'
                        ? 'border-primary-500 text-primary-500'
                        : 'border-gray-300'
                    }`}
                  >
                    1 Kg
                  </button>
                </div>
              </div>

              {/* Message on Cake */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Cake Message</h3>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter message on cake"
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  rows="3"
                  maxLength={25}
                />
                <p className="text-sm text-gray-500 mt-1">{message.length}/25</p>
              </div>

              {/* Delivery Location */}
              <div className="mb-6">
                <h3 className="font-medium mb-2">Delivery Location</h3>
                <select className="w-full p-3 border border-gray-300 rounded-lg">
                  <option>Select your city</option>
                  <option>New Delhi</option>
                  <option>Mumbai</option>
                  <option>Bangalore</option>
                </select>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-white text-primary-500 border border-primary-500 py-3 rounded-lg hover:bg-primary-50"
                >
                  Add To Cart
                </button>
                <button
                  onClick={() => {
                    handleAddToCart()
                    navigate('/checkout')
                  }}
                  className="flex-1 bg-primary-500 text-white py-3 rounded-lg hover:bg-primary-600"
                >
                  Buy Now
                </button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg"
                      alt="On-Time Delivery"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">On-Time Delivery</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/8330424/pexels-photo-8330424.jpeg"
                      alt="100% Fresh"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">100% Fresh & Hygienic</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 rounded-full overflow-hidden">
                    <img 
                      src="https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg"
                      alt="Quality Assured"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-sm font-medium">Quality Assured</p>
                </div>
              </div>

              {/* Reviews */}
              <div className="mt-8">
                <h3 className="font-medium mb-4">Ratings & Reviews</h3>
                <div className="flex items-center mb-4">
                  <span className="text-2xl font-bold mr-2">{product.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="ml-2 text-gray-500">({product.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddToCartPopup 
        isOpen={showAddToCartPopup}
        onClose={() => setShowAddToCartPopup(false)}
        mainProduct={{
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.images[0],
          quantity: 1,
          customizations: {
            weight: selectedWeight,
            message
          }
        }}
      />
    </>
  )
}

export default ProductDetailPage
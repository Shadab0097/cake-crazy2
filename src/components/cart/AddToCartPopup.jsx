import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/slices/cartSlice'

const AddToCartPopup = ({ isOpen, onClose, mainProduct }) => {
  const dispatch = useDispatch()
  const [selectedAddons, setSelectedAddons] = useState([])
  
  const addons = [
    {
      id: 'candle-1',
      name: 'Birthday Candles Pack',
      price: 49,
      image: 'https://images.pexels.com/photos/1793037/pexels-photo-1793037.jpeg'
    },
    {
      id: 'sticker-1',
      name: 'Happy Birthday Stickers',
      price: 29,
      image: 'https://images.pexels.com/photos/1793035/pexels-photo-1793035.jpeg'
    },
    {
      id: 'topper-1',
      name: 'Cake Topper',
      price: 99,
      image: 'https://images.pexels.com/photos/1793036/pexels-photo-1793036.jpeg'
    },
    {
      id: 'balloon-1',
      name: 'Birthday Balloons Set',
      price: 149,
      image: 'https://images.pexels.com/photos/1793034/pexels-photo-1793034.jpeg'
    }
  ]

  const handleAddonToggle = (addon) => {
    setSelectedAddons(prev => {
      if (prev.find(item => item.id === addon.id)) {
        return prev.filter(item => item.id !== addon.id)
      }
      return [...prev, addon]
    })
  }

  const handleAddToCart = () => {
    // Add main product
    dispatch(addToCart(mainProduct))
    
    // Add selected addons
    selectedAddons.forEach(addon => {
      dispatch(addToCart({
        id: addon.id,
        name: addon.name,
        price: addon.price,
        image: addon.image,
        quantity: 1,
        customizations: {}
      }))
    })
    
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/50 transition-opacity" onClick={onClose}></div>
        
        <div className="relative bg-white rounded-xl shadow-xl max-w-lg w-full mx-auto">
          <div className="p-6">
            <h2 className="text-xl font-semibold mb-4">Would you like to add extras?</h2>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              {addons.map(addon => (
                <div 
                  key={addon.id}
                  className={`border rounded-lg p-3 cursor-pointer transition-all ${
                    selectedAddons.find(item => item.id === addon.id)
                      ? 'border-primary-500 bg-primary-50'
                      : 'border-neutral-200 hover:border-primary-300'
                  }`}
                  onClick={() => handleAddonToggle(addon)}
                >
                  <div className="aspect-square rounded-md overflow-hidden mb-2">
                    <img 
                      src={addon.image} 
                      alt={addon.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-sm mb-1">{addon.name}</h3>
                  <p className="text-sm text-neutral-600">₹{addon.price}</p>
                </div>
              ))}
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={onClose}
                className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg text-neutral-700 hover:bg-neutral-50"
              >
                Skip
              </button>
              <button
                onClick={handleAddToCart}
                className="flex-1 px-4 py-2 bg-primary-500 text-white rounded-lg hover:bg-primary-600"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddToCartPopup
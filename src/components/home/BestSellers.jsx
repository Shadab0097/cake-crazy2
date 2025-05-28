import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProductCard from '../products/ProductCard'

const BestSellers = () => {
  const { items } = useSelector(state => state.products)
  const bestSellers = items.slice(0, 8) // Get first 8 products for demo

  return (
    <section className="py-12 bg-pink-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Our Best Sellers</h2>
          <Link to="/catalog" className="text-primary-500 hover:text-primary-600">
            View All
          </Link>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default BestSellers
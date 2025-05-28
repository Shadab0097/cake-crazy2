import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import ProductCard from '../products/ProductCard'

const FeaturedProducts = () => {
  const { featuredItems, status } = useSelector(state => state.products)
  
  // Loading state
  if (status === 'loading') {
    return (
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Best Sellers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <div key={index} className="bg-neutral-100 rounded-2xl h-80 animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  // Error state
  if (status === 'failed') {
    return (
      <section className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Our Best Sellers</h2>
          <div className="text-center py-12 text-neutral-600">
            <p>Sorry, we couldn't load featured products at this time.</p>
          </div>
        </div>
      </section>
    )
  }
  
  return (
    <section className="py-16">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">Our Best Sellers</h2>
        <p className="text-neutral-600 text-center max-w-xl mx-auto mb-12">
          Discover our most popular cakes loved by customers across the country
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredItems.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/catalog" className="btn btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  )
}

export default FeaturedProducts
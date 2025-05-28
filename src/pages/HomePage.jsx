import Hero from '../components/home/Hero'
import CategoryCards from '../components/home/CategoryCards'
import BestSellers from '../components/home/BestSellers'
import FlavorCategories from '../components/home/FlavorCategories'
import TrendingCakes from '../components/home/TrendingCakes'

const HomePage = () => {
  return (
    <div>
      <Hero />
      <CategoryCards />
      <BestSellers />
      <FlavorCategories />
      <TrendingCakes />
    </div>
  )
}

export default HomePage
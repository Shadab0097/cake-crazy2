import { Link } from 'react-router-dom'

const TrendingCakes = () => {
  const trendingCategories = [
    {
      title: "Mango Cakes",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg",
      link: "/catalog?category=mango"
    },
    {
      title: "Cricket Cakes",
      image: "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg",
      link: "/catalog?category=cricket"
    },
    {
      title: "Pinata Cakes",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      link: "/catalog?category=pinata"
    },
    {
      title: "Pull Me Up Cakes",
      image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg",
      link: "/catalog?category=pull-me-up"
    },
    {
      title: "Bomb Cakes",
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg",
      link: "/catalog?category=bomb"
    }
  ]

  return (
    <section className="py-12 bg-pink-50">
      <div className="container-custom">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Trending Cakes</h2>
          <Link to="/catalog" className="text-primary-500 hover:text-primary-600">
            View All
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {trendingCategories.slice(0, 4).map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-center font-medium">{category.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TrendingCakes
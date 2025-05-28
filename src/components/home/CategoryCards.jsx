import { Link } from 'react-router-dom'

const CategoryCards = () => {
  const categories = [
    {
      title: "Regular Cakes",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/catalog?category=regular"
    },
    {
      title: "Gourmet Cakes",
      image: "https://images.pexels.com/photos/132694/pexels-photo-132694.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/catalog?category=gourmet"
    },
    {
      title: "Photo Cakes",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/catalog?category=photo"
    },
    {
      title: "Theme Cakes",
      image: "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/catalog?category=theme"
    }
  ]

  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-8">Surprise Your Loved One</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-square">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
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

export default CategoryCards
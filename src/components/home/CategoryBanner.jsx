import { Link } from 'react-router-dom'

const CategoryBanner = () => {
  const categories = [
    {
      id: 1,
      name: "Birthday Cakes",
      description: "Make their day special with a delicious birthday cake",
      image: "https://images.pexels.com/photos/1055272/pexels-photo-1055272.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/catalog?category=birthday",
      color: "from-primary-500 to-pink-400"
    },
    {
      id: 2,
      name: "Anniversary Cakes",
      description: "Celebrate your love with our romantic collection",
      image: "https://images.pexels.com/photos/5243019/pexels-photo-5243019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/catalog?category=anniversary",
      color: "from-secondary-500 to-blue-400"
    },
    {
      id: 3,
      name: "Custom Cakes",
      description: "Design your own cake with our customization options",
      image: "https://images.pexels.com/photos/6133311/pexels-photo-6133311.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      link: "/catalog?custom=true",
      color: "from-accent-500 to-yellow-400"
    }
  ]
  
  return (
    <section className="py-16 bg-neutral-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">Browse By Category</h2>
        <p className="text-neutral-600 text-center max-w-xl mx-auto mb-12">
          Explore our delicious range of cakes for every occasion
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map(category => (
            <Link 
              key={category.id}
              to={category.link}
              className="group relative rounded-2xl overflow-hidden h-80 shadow-md hover:shadow-lg transition-shadow"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110" 
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-70`} />
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-white text-opacity-90 mb-4">{category.description}</p>
                <span className="text-white font-medium group-hover:underline">
                  Browse Collection
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CategoryBanner
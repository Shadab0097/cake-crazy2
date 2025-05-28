import { Link } from 'react-router-dom'

const FlavorCategories = () => {
  const flavors = [
    "Mango",
    "Chocolate",
    "Fruits",
    "Red Velvet",
    "Blackforest",
    "Pineapple",
    "Butterscotch",
    "Kit Kat"
  ]

  return (
    <section className="py-12">
      <div className="container-custom">
        <h2 className="text-2xl font-bold mb-8">Experience Flavours</h2>
        <div className="flex flex-wrap gap-3">
          {flavors.map((flavor, index) => (
            <Link
              key={index}
              to={`/catalog?flavor=${flavor.toLowerCase()}`}
              className="px-6 py-2 rounded-full border border-neutral-200 hover:border-primary-500 hover:text-primary-500 transition-colors"
            >
              {flavor}
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FlavorCategories
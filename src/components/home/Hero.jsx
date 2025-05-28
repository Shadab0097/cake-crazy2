import { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const categories = [
    { name: "Brother's Day Cakes", link: "/catalog?category=brothers-day" },
    { name: "Cakes", link: "/catalog" },
    { name: "Theme Cakes", link: "/catalog?category=theme" },
    { name: "By Relationship", link: "/catalog?category=relationship" },
    { name: "Desserts", link: "/catalog?category=desserts" },
    { name: "Birthday", link: "/catalog?category=birthday" },
    { name: "Hampers", link: "/catalog?category=hampers", isNew: true },
    { name: "Anniversary", link: "/catalog?category=anniversary" },
    { name: "Customized Cakes", link: "/catalog?category=custom" },
    { name: "Photo Cakes", link: "/catalog?category=photo" },
    { name: "Kids Cakes", link: "/catalog?category=kids" },
    { name: "Wedding Cakes", link: "/catalog?category=wedding" }
  ]

  const slides = [
    {
      id: 1,
      title: "Anniversary",
      subtitle: "CAKES",
      image: "https://images.pexels.com/photos/5243019/pexels-photo-5243019.jpeg",
      link: "/catalog?category=anniversary",
      textColor: "text-white",
      overlayColor: "bg-black/30"
    },
    {
      id: 2,
      title: "MAKE Birthday",
      subtitle: "WISHES COME TRUE",
      image: "https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg",
      link: "/catalog?category=birthday",
      textColor: "text-white",
      overlayColor: "bg-black/30"
    },
    {
      id: 3,
      title: "YOUR LITTLE ONE DESERVES A",
      subtitle: "Big Smile",
      image: "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg",
      link: "/catalog?category=kids",
      textColor: "text-white",
      overlayColor: "bg-black/30"
    },
    {
      id: 4,
      title: "Brother's Day",
      subtitle: "Special Cakes",
      image: "https://images.pexels.com/photos/1721932/pexels-photo-1721932.jpeg",
      link: "/catalog?category=brothers-day",
      textColor: "text-white",
      overlayColor: "bg-black/30",
      paymentIcons: true
    }
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    centerMode: true,
    centerPadding: '0',
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          centerMode: false
        }
      }
    ]
  }

  return (
    <div className="relative">
      {/* Category Navigation */}
      <nav className="bg-white border-b overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="overflow-x-auto -mx-4 px-4">
            <ul className="flex items-center whitespace-nowrap py-3 gap-6 min-w-max">
              {categories.map((category, index) => (
                <li key={index} className="flex-shrink-0">
                  <Link 
                    to={category.link}
                    className="text-gray-700 hover:text-primary-500 transition-colors flex items-center text-sm"
                  >
                    {category.name}
                    {category.isNew && (
                      <span className="ml-1 px-1.5 py-0.5 text-[10px] bg-red-500 text-white rounded-full">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Slider */}
      <div className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <Slider {...settings} className="hero-slider -mx-2">
            {slides.map((slide) => (
              <div key={slide.id} className="px-2">
                <Link 
                  to={slide.link} 
                  className="block relative rounded-lg overflow-hidden aspect-[4/3]"
                >
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover"
                  />
                  <div className={`absolute inset-0 ${slide.overlayColor} flex items-center justify-center`}>
                    <div className={`${slide.textColor} text-center`}>
                      <h2 className="text-2xl md:text-3xl font-bold">
                        {slide.title}
                      </h2>
                      <p className="text-lg md:text-xl mt-2">
                        {slide.subtitle}
                      </p>
                    </div>
                  </div>
                  {slide.paymentIcons && (
                    <div className="absolute bottom-4 right-4 bg-white px-3 py-1.5 rounded-lg shadow-md">
                      <img 
                        src="https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
                        alt="Paytm"
                        className="h-6"
                      />
                    </div>
                  )}
                </Link>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Hero
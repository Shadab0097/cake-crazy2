import { useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    beforeChange: (current, next) => setCurrentSlide(next)
  }
  
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      location: "New York",
      avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "The Black Forest cake I ordered for my husband's birthday was absolutely delicious! The delivery was on time and the cake looked exactly like the picture. Everyone at the party loved it!",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Chen",
      location: "Boston",
      avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "I've ordered from Bakingo multiple times and they never disappoint. Their Red Velvet cake is the best I've ever had. The quality and taste are consistently excellent!",
      rating: 5
    },
    {
      id: 3,
      name: "Emma Wilson",
      location: "Chicago",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      text: "Ordered a custom cake for my daughter's 5th birthday and it exceeded all expectations. The design was perfect and the cake tasted amazing. Will definitely order again!",
      rating: 5
    }
  ]
  
  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center mb-4">What Our Customers Say</h2>
        <p className="text-neutral-600 text-center max-w-xl mx-auto mb-12">
          Hear from our satisfied customers about their Bakingo experience
        </p>
        
        <div className="max-w-3xl mx-auto">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-neutral-50 rounded-2xl p-8 md:p-10 shadow-sm">
                  <div className="flex items-center mb-6">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-16 h-16 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-lg">{testimonial.name}</h4>
                      <p className="text-neutral-500">{testimonial.location}</p>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <div className="flex mb-2">
                      {[...Array(5)].map((_, i) => (
                        <svg 
                          key={i} 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-5 w-5 ${i < testimonial.rating ? 'text-accent-500' : 'text-neutral-300'}`}
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-lg italic text-neutral-700">&ldquo;{testimonial.text}&rdquo;</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
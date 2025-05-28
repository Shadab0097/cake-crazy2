import { Link } from 'react-router-dom'
import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-neutral-50 pt-12 pb-6">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold font-display text-primary-600 mb-4">Cake Crazy</h3>
            <p className="text-neutral-600 mb-4">
              Bringing happiness to your doorstep with delicious cakes and pastries since 2016.
            </p>
            <div className="flex items-center space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <FiFacebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <FiInstagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <FiTwitter size={20} />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-primary-500 transition-colors">
                <FiYoutube size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/catalog" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  All Cakes
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=birthday" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Birthday Cakes
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=anniversary" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Anniversary Cakes
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=custom" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Custom Cakes
                </Link>
              </li>
              <li>
                <Link to="/catalog?category=pastries" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Pastries
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/contact" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Shipping Policy
                </Link>
              </li>
              <li>
                <Link to="/returns" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Returns & Refunds
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-neutral-600 hover:text-primary-500 transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
            <address className="not-italic text-neutral-600 space-y-3">
              <p>123 Bakery Street</p>
              <p>New York, NY 10001</p>
              <p>Email: <a href="mailto:info@bakingo.com" className="text-primary-500 hover:underline">info@cakecrazy.com</a></p>
              <p>Phone: <a href="tel:+12345678900" className="text-primary-500 hover:underline">(123) 456-7890</a></p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-neutral-200 pt-6 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-500 mb-4 md:mb-0">
              &copy; {currentYear} Cake Crazy. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/terms" className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/sitemap" className="text-sm text-neutral-500 hover:text-primary-500 transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
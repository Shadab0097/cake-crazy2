import { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState('')
  const [isSuccess, setIsSuccess] = useState(false)
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setMessage('Thank you for subscribing! Check your email for exclusive offers.')
      setEmail('')
      
      // Reset message after 5 seconds
      setTimeout(() => {
        setMessage('')
        setIsSuccess(false)
      }, 5000)
    }, 1000)
  }
  
  return (
    <section className="py-16 bg-primary-50">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-center mb-4">Join Our Sweet Community</h2>
          <p className="text-neutral-600 mb-8">
            Subscribe to our newsletter and get 10% off your first order, plus exclusive offers, cake ideas, and baking tips.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-grow px-4 py-3 rounded-full border border-neutral-200 focus:outline-none focus:border-primary-300 focus:ring-1 focus:ring-primary-300"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit" 
                className="btn btn-primary min-w-[120px]"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            
            {message && (
              <p className={`mt-4 ${isSuccess ? 'text-success-500' : 'text-error-500'}`}>
                {message}
              </p>
            )}
            
            <p className="text-sm text-neutral-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Newsletter
import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <div className="py-16">
      <div className="container-custom">
        <div className="text-center max-w-lg mx-auto">
          <h1 className="text-6xl font-bold text-primary-500 mb-6">404</h1>
          <h2 className="text-3xl font-bold mb-4">Page Not Found</h2>
          <p className="text-neutral-600 mb-8">
            The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
          </p>
          <Link to="/" className="btn btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage
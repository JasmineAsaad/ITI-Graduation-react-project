import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-3 fw-bold">404</h1>
      <p className="text-secondary mb-4">Page not found.</p>
      <Link to="/" className="btn btn-primary rounded-pill">
        Back Home
      </Link>
    </div>
  )
}

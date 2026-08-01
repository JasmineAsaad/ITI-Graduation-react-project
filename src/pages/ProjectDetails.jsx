import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProjectById } from '../api/fakeApi.js'

export default function ProjectDetails() {
  const { id } = useParams()
  const [project, setProject] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    setError(null)
    getProjectById(id)
      .then(setProject)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) {
    return (
      <div className="container py-5 text-center">
        <div className="spinner-border text-primary" role="status"></div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container py-5 text-center">
        <p className="text-danger">{error}</p>
        <Link to="/projects" className="btn btn-primary rounded-pill">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-5">
      <Link to="/projects" className="text-decoration-none mb-3 d-inline-block">
        <i className="bi bi-arrow-left"></i> Back
      </Link>
      <div className="row g-5 align-items-center">
        <div className="col-12 col-lg-6">
          <img src={project.image} className="img-fluid rounded-4 shadow" alt={project.title} />
        </div>
        <div className="col-12 col-lg-6">
          <span className="badge text-bg-primary-subtle text-primary-emphasis mb-2">
            {project.category}
          </span>
          <h1 className="fw-bold mb-3">{project.title}</h1>
          <p className="text-secondary fs-5">{project.description}</p>
          <div className="d-flex gap-3 mt-4">
            <a href={project.demo} target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill">
              Live Demo
            </a>
            <a href={project.repo} target="_blank" rel="noreferrer" className="btn btn-outline-secondary rounded-pill">
              <i className="bi bi-github"></i> Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

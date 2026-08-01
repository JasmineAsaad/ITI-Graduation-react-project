import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getProjects } from '../api/fakeApi.js'
import ProjectCard from '../components/ProjectCard.jsx'
import profilePhoto from '../assets/profile.jpg'

export default function Home() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getProjects('All').then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  return (
    <>
      <section className="container py-5">
        <div className="row align-items-center g-5">
          <div className="col-lg-7">
            <img
              src={profilePhoto}
              className="rounded-circle mb-3"
              alt="Jasmine Asaad Fared"
              width="100"
              height="100"
              style={{ objectFit: 'cover' }}
            />
            <h1 className="display-6 fw-bold mb-2">Jasmine Asaad Fared</h1>
            <h2 className="h5 text-primary fw-semibold mb-3">Junior Frontend Developer</h2>
            <p className="text-secondary fs-5">
              I'm a Junior Front-End Developer who enjoys turning ideas into modern and
              responsive websites. I have built multiple projects using HTML, CSS, JavaScript,
              Bootstrap, React, and REST APIs. Through these projects, I have gained hands-on
              experience in creating clean, reusable, and user-friendly interfaces.
            </p>
            <div className="d-flex gap-3 fs-4 mt-3">
              <a
                href="https://www.linkedin.com/in/jasmine-asaad-760013259"
                target="_blank"
                rel="noreferrer"
                className="text-reset"
                title="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://github.com/JasmineAsaad"
                target="_blank"
                rel="noreferrer"
                className="text-reset"
                title="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
          </div>
          <div className="col-lg-5 text-center">
            {/* <img
              src="https://placehold.co/420x300/312e81/c7d2fe?text=Frontend+Dev"
              className="img-fluid rounded-4"
              alt="illustration"
            /> */}
          </div>
        </div>
      </section>

      <section className="container pb-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <h1 className="h4 fw-bold mb-0">MY PROJECTS</h1>
          <Link to="/projects" className="btn btn-sm btn-primary rounded-pill">
            All Projects
          </Link>
        </div>
        {loading ? (
          <div className="text-center py-5">
            <div className="spinner-border text-primary" role="status"></div>
          </div>
        ) : (
          <div className="row g-4">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}

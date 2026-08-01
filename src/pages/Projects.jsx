import { useEffect, useState } from 'react'
import { getProjects, getCategories } from '../api/fakeApi.js'
import ProjectCard from '../components/ProjectCard.jsx'

export default function Projects() {
  const [categories, setCategories] = useState(['All'])
  const [active, setActive] = useState('All')
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getCategories().then(setCategories)
  }, [])

  useEffect(() => {
    setLoading(true)
    getProjects(active).then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [active])

  return (
    <div className="container py-5">
      <h1 className="fw-bold mb-4">My Projects</h1>
      <div className="row g-4">
        <aside className="col-12 col-lg-3">
          <div className="list-group filter-list">
            {categories.map((cat) => (
              <button
                key={cat}
                className={
                  'list-group-item list-group-item-action rounded-3 mb-2 border' +
                  (active === cat ? ' active' : '')
                }
                onClick={() => setActive(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </aside>

        <main className="col-12 col-lg-9">
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
        </main>
      </div>
    </div>
  )
}

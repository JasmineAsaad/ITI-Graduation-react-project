import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <div className="col-12 col-sm-6 col-lg-4">
      <div className="card project-card h-100 border-0 shadow-sm">
        <img
          src={project.image}
          className="card-img-top"
          alt={project.title}
          loading="lazy"
        />
        <div className="card-body d-flex flex-column">
          <span className="badge text-bg-primary-subtle text-primary-emphasis mb-2 align-self-start">
            {project.category}
          </span>
          <h5 className="card-title fw-bold">{project.title}</h5>
          <p className="card-text text-secondary small flex-grow-1">
            {project.description}
          </p>
          <div className="d-flex justify-content-between align-items-center mt-2">
            <div className="d-flex gap-3 fs-5">
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-reset"
                title="Live demo"
              >
                <i className="bi bi-box-arrow-up-right"></i>
              </a>
              <a
                href={project.repo}
                target="_blank"
                rel="noreferrer"
                className="text-reset"
                title="Source code"
              >
                <i className="bi bi-github"></i>
              </a>
            </div>
            <Link
              to={`/projects/${project.id}`}
              className="fw-semibold text-decoration-none"
            >
              more <i className="bi bi-arrow-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

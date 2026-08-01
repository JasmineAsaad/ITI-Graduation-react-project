import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    document.body.setAttribute("data-bs-theme", dark ? "dark" : "light");
  }, [dark]);

  const linkClass = ({ isActive }) =>
    "nav-link px-3" + (isActive ? " active fw-semibold" : "");

  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm py-3">
      <div className="container">
        <NavLink className="navbar-brand fw-bold" to="/">
          Jasmine Dev
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <ul className="navbar-nav mx-auto rounded-pill px-2 py-1 nav-pill-wrap">
            <li className="nav-item">
              <NavLink className={linkClass} to="/" end>
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/projects">
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={linkClass} to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className="btn btn-sm btn-outline-secondary rounded-circle ms-auto"
            onClick={() => setDark((d) => !d)}
            title="Toggle theme"
          >
            <i className={dark ? "bi bi-moon-stars" : "bi bi-sun"}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

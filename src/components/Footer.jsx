export default function Footer() {
  return (
    <footer className="border-top py-4 mt-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
        <small className="text-secondary">
          © 2026 Jasmine Dev. All rights reserved.
        </small>
        <div className="d-flex gap-3 fs-5">
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
    </footer>
  );
}

import { useState } from 'react'
import { sendContactMessage } from '../api/fakeApi.js'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState({ state: 'idle', text: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ state: 'loading', text: '' })
    try {
      const res = await sendContactMessage(form)
      setStatus({ state: 'success', text: res.message })
      setForm({ name: '', email: '', message: '' })
    } catch (err) {
      setStatus({ state: 'error', text: err.message })
    }
  }

  return (
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-12 col-lg-6">
          <h1 className="fw-bold mb-2">
            <i className="bi bi-envelope me-2"></i>Contact Me
          </h1>
          <p className="text-secondary mb-4">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <form onSubmit={handleSubmit} noValidate>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email Address</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Message</label>
              <textarea
                name="message"
                rows="4"
                className="form-control"
                value={form.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary rounded-pill px-4" disabled={status.state === 'loading'}>
              {status.state === 'loading' ? 'Sending...' : 'Submit'}
            </button>

            {status.state === 'success' && <div className="alert alert-success mt-3">{status.text}</div>}
            {status.state === 'error' && <div className="alert alert-danger mt-3">{status.text}</div>}
          </form>
        </div>

        <div className="col-12 col-lg-6">
          <div className="card border-0 shadow-sm p-4 h-100">
            <h5 className="fw-bold mb-3">Get in touch directly</h5>
            <ul className="list-unstyled d-flex flex-column gap-3 fs-5">
              <li>
                <i className="bi bi-envelope-fill me-2 text-primary"></i>
                <a href="mailto:jasmineassad806@gmail.com" className="text-reset text-decoration-none">
                  jasmineassad806@gmail.com
                </a>
              </li>
              <li>
                <i className="bi bi-linkedin me-2 text-primary"></i>
                <a
                  href="https://www.linkedin.com/in/jasmine-asaad-760013259"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset text-decoration-none"
                >
                  LinkedIn Profile
                </a>
              </li>
              <li>
                <i className="bi bi-github me-2 text-primary"></i>
                <a
                  href="https://github.com/JasmineAsaad"
                  target="_blank"
                  rel="noreferrer"
                  className="text-reset text-decoration-none"
                >
                  GitHub Profile
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

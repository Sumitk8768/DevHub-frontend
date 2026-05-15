import React from 'react'

const Footer = () => {
  return (
  <footer
        className="mt-16 border-t"
        style={{ borderColor: "var(--border-color)" }}
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-10 md:flex-row md:items-center md:justify-between">
          <div>
            <h2
              className="text-2xl font-bold"
              style={{ color: "var(--accent)" }}
            >
              DevHub
            </h2>

            <p className="mt-2" style={{ color: "var(--text-secondary)" }}>
              © 2024 DevHub Ecosystem. Built for the elite.
            </p>
          </div>

          <div
            className="flex flex-wrap gap-8"
            style={{ color: "var(--text-secondary)" }}
          >
            <a href="#">System Status</a>
            <a href="#">API Docs</a>
            <a href="#">Privacy Protocol</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

      
  )
}

export default Footer

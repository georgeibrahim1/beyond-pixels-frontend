import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            👾 <span className="footer-brand-text"> Beyond Pixels </span>
          </div>
          <p className="footer-copyright">
            © {new Date().getFullYear()} Beyond Pixels. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
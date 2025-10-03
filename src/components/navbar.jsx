import React from 'react'
import Logo from './logo'
import { Link, useNavigate } from 'react-router'
import './navbar.css'
import './buttons.css'

export default function Navbar() {

  const navigate = useNavigate();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/game", label: "Game" },
    { to: "/story", label: "Story" },
    { to: "/about", label: "About" },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          <Logo />
          
          <div className="navbar-links">
            {navLinks.map(link => (
              <Link
                key={link.to}
                to={link.to}
                className="nav-link"
              >
                {link.label}
              </Link>
            ))}
            
            <div className="navbar-cta">
              <button className="btn btn-primary" onClick={()=> navigate("/explore")}>
                Explore
              </button>
            </div>
          </div>
          
          <button className="mobile-menu-button">
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

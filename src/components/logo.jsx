import React from 'react'
import './logo.css'

export default function Logo() {
  return (
    <div className="logo">
      <div className="logo-icon">
        <svg 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
          <path d="M19 15L20.09 18.26L24 19L20.09 19.74L19 23L17.91 19.74L14 19L17.91 18.26L19 15Z" />
          <path d="M5 15L6.09 18.26L10 19L6.09 19.74L5 23L3.91 19.74L0 19L3.91 18.26L5 15Z" />
        </svg>
      </div>
      
      <div className="logo-text">
        <span className="brand-name">Beyond</span>
        <span className="brand-suffix">Pixels</span>
      </div>
    </div>
  )
}

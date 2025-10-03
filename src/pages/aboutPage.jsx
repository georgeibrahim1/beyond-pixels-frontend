import React from 'react'
import './AboutPage.css'

export default function AboutPage() {
return ( <section className="about-page space-background"> <div className="cinematic-overlay"> <div className="about-container">


      <div className="about-card animate-fade-in-up">
        <h1 className="gradient-text about-title">🚀 Our Mission</h1>
        <p className="about-text">
          Embiggen Your Eyes was created for the NASA Space Apps Challenge 2025 to make astronomical imagery more accessible and interactive for both scientists and the public. Our platform enables users to explore, annotate, and analyze NASA's incredible space imagery collections.
        </p>
      </div>

      <div className="about-card animate-fade-in-up delay-200">
        <h2 className="gradient-text">🛰️ Features</h2>
        <ul className="about-list">
          <li>High-performance image viewing with deep zoom capabilities</li>
          <li>Precision annotation tools for marking celestial features</li>
          <li>AI-powered feature detection to identify interesting patterns</li>
          <li>Multi-spectral analysis with different wavelength views</li>
          <li>Educational content to learn about astronomical phenomena</li>
        </ul>
      </div>

      <div className="about-card animate-fade-in-up delay-300">
        <h2 className="gradient-text">🌌 Technology</h2>
        <p className="about-text">
          Built with React, Leaflet, and NASA's APIs, our platform combines modern web technologies with scientific data to create an engaging educational experience.
        </p>
      </div>

      <div className="about-card animate-fade-in-up delay-500">
        <h2 className="gradient-text">🌍 NASA API</h2>
        <p className="about-text">
          This project uses the NASA API but is not endorsed or certified by NASA. We gratefully acknowledge NASA's open data policies that make projects like this possible.
        </p>
      </div>

      <div className="about-card animate-fade-in-up delay-1000">
        <h2 className="gradient-text">👩‍🚀 Team</h2>

      </div>

    </div>
  </div>
</section>
)
}

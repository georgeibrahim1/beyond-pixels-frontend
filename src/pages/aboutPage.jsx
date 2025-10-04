import React from 'react'
import './aboutPage.css'

export default function AboutPage() {
return ( <section className="about-page space-background"> <div className="cinematic-overlay"> <div className="about-container">


      <div className="about-card animate-fade-in-up">
        <h1 className='about-title'>
          <span>🚀</span>
          <span className="gradient-text"> Our Mission</span>
        </h1>
        <h1 className="gradient-text about-title"> </h1>
        <p className="about-text">
          Embiggen Your Eyes was created for the NASA Space Apps Challenge 2025 to make astronomical imagery more accessible and interactive for both scientists and the public. Our platform enables users to explore, annotate, and analyze NASA's incredible space imagery collections.
        </p>
      </div>

      <div className="about-card animate-fade-in-up delay-200">
        <h2>
          <span>🛰️</span>
          <span className="gradient-text"> Features</span>
        </h2>
        <ul className="about-list">
          <li>High-performance image viewing with deep zoom capabilities</li>
          <li>Precision annotation tools for marking celestial features</li>
          <li>Educational content to learn about astronomical phenomena</li>
        </ul>
      </div>

      <div className="about-card animate-fade-in-up delay-300">
        <h2>
          <span>🌌</span>
          <span className="gradient-text"> Technology</span>
        </h2>
        <p className="about-text">
          Built with React, Leaflet, and NASA's APIs, our platform combines modern web technologies with scientific data to create an engaging educational experience.
        </p>
      </div>

      <div className="about-card animate-fade-in-up delay-500">
        <h2>
          <span>🌍</span>
          <span className="gradient-text"> NASA API</span>
        </h2>
        <p className="about-text">
          This project uses the NASA API but is not endorsed or certified by NASA. We gratefully acknowledge NASA's open data policies that make projects like this possible.
        </p>
      </div>

      <div className="about-card animate-fade-in-up delay-1000">
       <h2>
        <span>👩‍🚀</span>
        <span className="gradient-text"> Team</span>
      </h2>

      </div>

    </div>
  </div>
</section>
)
}

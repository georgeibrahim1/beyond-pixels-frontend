import React from 'react'
import './homePage.css'
import '../components/buttons.css'
import { useNavigate } from 'react-router'

export default function HomePage() {

  const navigate = useNavigate();

  return (
    <div className="homepage">
      <section className="hero hero-section">
        <div className="hero-overlay cinematic-overlay" />
        
        <div className="hero-content">
          <div className="animate-fade-in-up">
            <h1 className="hero-title">
              Beyond <span className="gradient-text">Pixels</span>
            </h1>
            
            <p className="hero-subtitle">
              Embark on an extraordinary journey through immersive digital worlds where reality meets imagination
            </p>
            
            <div className="hero-buttons">
              <button className="btn btn-primary btn-lg animate-glow-pulse" onClick={() => navigate('/game')}>
                Test Your knowledge
              </button>
              <button className="btn btn-secondary btn-lg" onClick={() => navigate('/story')}>
                Watch Story
              </button>
            </div>
          </div>
        </div>
        
        <div className="floating-element floating-element-1" />
        <div className="floating-element floating-element-2" />
        <div className="floating-element floating-element-3" />
      </section>

      <section className="immersive-section">
        <div className="immersive-background" />
        <div className="immersive-overlay">
          <div className="immersive-overlay-inner" />
        </div>
        
        <div className="immersive-container">
          <div className="immersive-grid">
            <div className="immersive-content">
              <div className="immersive-content-box">
                <h2 className="immersive-title">
                  Immersive <span className="gradient-text">Experience</span>
                </h2>
                
                <p className="immersive-description">
                  Step into breathtaking worlds crafted with cutting-edge technology. 
                  Experience storytelling like never before with our revolutionary 
                  interactive platform that blurs the line between reality and digital art.
                </p>
                
                <div className="feature-list">
                  <div className="feature-item">
                    <div className="feature-bullet" />
                    <span className="feature-text">Cinematic Visual Quality</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet" />
                    <span className="feature-text">Interactive Storytelling</span>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet" />
                    <span className="feature-text">Immersive Audio Design</span>
                  </div>
                </div>
                
                <button className="btn btn-primary" onClick={() => navigate("/explore")}>
                  Explore Now
                </button>
              </div>
            </div>

            <div className="visual-element">
              <div className="orb-container">
                <div className="orb-layer orb-layer-1" />
                <div className="orb-layer orb-layer-2" />
                <div className="orb-layer orb-layer-3" />
                <div className="orb-core" />
                
                <div className="orbiting-element orbiting-element-1" />
                <div className="orbiting-element orbiting-element-2" />
                <div className="orbiting-element orbiting-element-3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section">
        <div className="features-container">
          <div className="features-header">
            <h2 className="features-title">
              Next-Gen <span className="gradient-text">Features</span>
            </h2>
            
            <p className="features-description">
              Discover the cutting-edge technology that powers our immersive experiences
            </p>
          </div>
          
          <div className="features-grid">
            {[
              {
                title: "AI-Powered Narratives",
                description: "Dynamic storytelling that adapts to your choices and creates unique experiences every time.",
                icon: "🧠"
              },
              {
                title: "Photorealistic Graphics",
                description: "Stunning visuals powered by advanced rendering technology for unparalleled realism.",
                icon: "🎨"
              },
              {
                title: "Spatial Audio",
                description: "3D audio technology that places you at the center of every scene and story.",
                icon: "🎵"
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="feature-card"
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3 className="feature-card-title">
                  {feature.title}
                </h3>
                <p className="feature-card-description">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

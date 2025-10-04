import React from 'react';
import './homePage.css';
import '../components/buttons.css';
import { useNavigate } from 'react-router';
import PlanetButton from '../components/planetButton';
import { maps } from '../features/map/data/mapinfo';

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="homepage space-background">
      
      {/* ================= Hero Section ================= */}
      <section className="hero hero-section">
        <div className="hero-overlay cinematic-overlay" />

        <div className="hero-content animate-fade-in-up delay-100">
          <h1 className="hero-title">
            Beyond <span className="gradient-text">Pixels</span>
          </h1>
          <p className="hero-subtitle">
            Embark on an extraordinary journey through immersive digital worlds.
          </p>

          <div className="hero-buttons">
            <button
              className="btn btn-primary btn-lg animate-glow-pulse"
              onClick={() => navigate('/explore')}
            >
              Explore Now
            </button>
            <button
              className="btn btn-secondary btn-lg"
              onClick={() => navigate('/about')}
            >
              About US
            </button>
          </div>
        </div>

        <div className="floating-element floating-element-1" />
        <div className="floating-element floating-element-2" />
        <div className="floating-element floating-element-3" />
      </section>
    </div>
  );
}

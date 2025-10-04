import React from 'react';
import './PlanetButton.css';
import ThreeDComponent from "./threeModel";

export default function PlanetButton({ 
  title = "Planet Name", 
  description = "Explore this amazing world",
  onClick,
  type = "cube",
  size = 1,
  color = "skyblue",
  modelUrl = null,
  autoRotate = false,
  allowZoom = false,
  rotateObject = false
}) {
  return (
    <button className="planet-button" onClick={onClick}>
      <div className="planet-button-content">
        <div className='planet-button-icon' style={{ width: "90px", height: "90px" }}>
          <ThreeDComponent 
            type={type} 
            size={size} 
            color={color} 
            modelUrl={modelUrl} 
            autoRotate={autoRotate} 
            allowZoom={allowZoom} 
            rotateObject={rotateObject} 
          />
        </div>
        <div className="planet-button-text">
          <h3 className="planet-button-title">{title}</h3>
          <p className="planet-button-description">{description}</p>
        </div>
      </div>
    </button>
  );
}

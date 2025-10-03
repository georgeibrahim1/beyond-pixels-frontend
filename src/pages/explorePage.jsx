import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./ExplorePage.css";

export default function ExplorePage() {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={13}
      scrollWheelZoom={false}
      eventhandlers={{

      }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://66fa9acb70cc.ngrok-free.app/tiles/{z}/{x}/{y}.jpg"
      />
      <Marker position={[51.505, -0.09]}>
        <Popup>
          <span className="gradient-text text-glow">
            A pretty CSS3 popup. <br /> Easily customizable.
          </span>
        </Popup>
      </Marker>
    </MapContainer>
  );
}

import React , {useEffect , useRef, useState} from "react";
import { MapContainer, TileLayer, useMapEvents , Marker, Popup , Tooltip} from "react-leaflet";
import L from "leaflet"; 
import "leaflet/dist/leaflet.css";
import "./explorePage.css";
import ThreeDComponent from "../components/threeModel";
import PlanetButton from "../components/planetButton";
import StoryPopup from "../components/storyPopup";
import { maps } from "../features/map/data/mapinfo";
import { categoryInfo } from "../features/map/data/catInfo";

function MapLogger() {
  useMapEvents({
    moveend(e) {
      const map = e.target;
      console.log("Zoom level:", map.getZoom());
    },
    click(e) {
      console.log("Clicked at:", e.latlng);
    },
  });
  return null;
}

export default function ExplorePage() {


  const [map,setMap] = useState(maps[0]);
  const [selectedStory, setSelectedStory] = useState(null);
  const [mapFilter, setMapFilter] = useState("all"); 

  const currentCategoryInfo = categoryInfo[mapFilter] || { title: "", description: "" };

  return (
    <section className="explore-page space-background">
      <div className="map-filter-bar animate-fade-in-up delay-100">
        {["earth", "mars", "moon", "sun", "all"].map((cat) => (
          <button
            key={cat}
            className={`filter-btn ${mapFilter === cat ? "active" : ""}`}
            onClick={() => setMapFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="explore-header">
        <h1 className="gradient-text explore-title animate-fade-in-up">
          {currentCategoryInfo.title}
        </h1>
        <p className="explore-description animate-fade-in-up delay-200">
          {currentCategoryInfo.description}
        </p>
      </div>

      <div className="explore-content">
        <div className="map-wrapper content-box animate-fade-in-up delay-300">
          <MapContainer
            center={[65,-65]}
            zoom={map.zoomRange[0]}
            minZoom={map.zoomRange[0]}
            maxZoom={map.zoomRange[1]}
            scrollWheelZoom={true}
          >
            <TileLayer
              url= {map.url}
              attribution="&copy;"
              noWrap={true}
              bounds={map.bounds}
              tms={map.tms}
            />
            {map.stroies.map((story, sIdx) => (
                <Marker
                  key={`-${sIdx}`}
                  position={story.coordinates}
                  icon={L.divIcon({ className: "story-marker" })}
                  eventHandlers={{
                    click: () => setSelectedStory(story),
                  }}
                >
                  <Tooltip
                    className="story-tooltip"
                    permanent
                    direction="top"
                    offset={[0, -10]}
                  >
                    <span>{story.markerTitle}</span>
                  </Tooltip>
                </Marker>
              ))
            }
            <MapLogger />
          </MapContainer>
        </div>

        <aside className="button-panel content-box animate-fade-in-up delay-500">
          <h2 className="panel-title">{`Explore ${mapFilter.charAt(0).toUpperCase() + mapFilter.slice(1)} Maps`} </h2>
            <div className="planets-list">
              {maps
                .filter((m) => mapFilter === "all" || m.category === mapFilter)
                .map((m, idx) => (
                  <PlanetButton
                    title={m.btitle}
                    description={m.bdescription}
                    key={idx}
                    modelUrl={m.modelUrl}
                    size={m.size || 0.6}
                    autoRotate={true}
                    rotateObject={true}
                    onClick={() => setMap(m)}
                  />
                ))}
            </div>
        </aside>
        {selectedStory && (
          <StoryPopup
            title={selectedStory.title}
            description={selectedStory.content}
            audioSrc={selectedStory.sound}
            photoSrc={selectedStory.photo}
            onClose={() => setSelectedStory(null)}
          />
        )}
      </div>
    </section>
  );
}

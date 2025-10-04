import React from "react";
import "./storyPopup.css";
import VoiceCircle from "./voiceCircle";

export default function StoryPopup({
  audioSrc,
  title = "Title",
  description = "Ok",
  photoSrc,
  onClose,
}) {
  return (
    <div className="audio-popup-container">
      <div className="audio-popup">
        {onClose && (
          <button className="form-close-button" onClick={onClose}>
            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}

        <div className="audio-popup-info">
          <h2 className="audio-popup-title">{title}</h2>

          {photoSrc && (
            <img src={photoSrc} alt={title} className="audio-popup-photo" />
          )}

          <p className="audio-popup-description">{description}</p>

          <div className="audio-player-container">
            <VoiceCircle />
            <audio controls className="audio-popup-player">
              <source src={audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>

        </div>
      </div>
    </div>
  );
}

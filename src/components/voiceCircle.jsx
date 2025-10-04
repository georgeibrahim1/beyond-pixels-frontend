import React, { useEffect, useState } from "react";
import "./VoiceCircle.css";

export default function VoiceCircle({ listening = true }) {
const [scale, setScale] = useState(1);

useEffect(() => {
if (!listening) return;


let frame = 0;
const interval = setInterval(() => {
  const amplitude = Math.sin(frame / 5) * 0.3 + 1;
  setScale(amplitude);
  frame++;
}, 100);

return () => clearInterval(interval);


}, [listening]);

return ( <div className="voice-audio-container">
    <div
    className={`voice-audio-circle ${listening ? "active" : ""}`}
    style={{ transform: `scale(${scale})` }}
    /> 
    </div>
);
}

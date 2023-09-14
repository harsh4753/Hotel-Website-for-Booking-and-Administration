import React from "react";
import "./HeroSection.css";
import Button from "../Button/Button";


function HeroSection() {
  return (
    <div className="hero-container">
      <video src="videos/video-3.mp4" autoPlay loop muted /> 
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      
      </div>
  );
}

export default HeroSection;

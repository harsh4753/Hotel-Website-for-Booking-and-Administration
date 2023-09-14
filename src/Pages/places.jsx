import React from 'react';
import Cards from '../Components/Card/Cards';

// import { Link } from "react-router-dom";
import "./HeroSection.css";

function places() {
  return (
    <>
     
      <div className="hero-container">
      <video src="videos/video-3.mp4" autoPlay loop muted /> 
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      </div>
      <Cards />
      {/* <div>

      </div> */}
      

    </>
  );
}

export default places;
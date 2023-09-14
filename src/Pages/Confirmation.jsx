// import HeroImage from "../../assets/food/food5.jpeg";
// import react-router-dom
// imports components
import React from "react";
// import React from 'react'
// import ReactDOM from 'react-dom'



import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
// import RoomContainer from "../Components/RoomsContainer/RoomsContainer";
import { Link } from "react-router-dom";
export default function Confirmation() {
  return (
    <Hero hero="roomsHero">
        <Banner title="Booking confirm">
          <Link to="/" className="btn-primary">
            return home
          </Link>
        </Banner>
      </Hero>
    // <header className="confirmation-header">
    //   <img
    //     className="confirmation-image"
    //     src={HeroImage}
    //     alt="Little Lemon Ingredients"
    //   ></img>
    //   <section className="reserve-header-text">
    //     <h1>Your Reservation is Confirmed!</h1>
    //     <h4>A confirmation message has been sent to your email.</h4>
    //     <h4>Thanks for dining with us!</h4>
    //   </section>

    //   <section className="redirect-buttons">
    //     <a
    //       className="redirect-button"
    //       href={require("../../assets/menu.webp")}
    //       target="_blank"
    //       rel="noreferrer"
    //     >
    //       Browse Menu
    //     </a>
    //     <Link className="redirect-button" to="/order">
    //       Order Online
    //     </Link>
    //     <Link className="redirect-button" to="/">
    //       Home Page
    //     </Link>
    //   </section>
    // </header>
  );
}

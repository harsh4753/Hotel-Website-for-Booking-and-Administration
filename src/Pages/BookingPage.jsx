// import Heading from "../sections/reservePages/Heading";
import ReservationForm from "../Components/RegistrationContainer/BookingForm";
import { useReducer } from "react";
import { fetchAPI } from "../bookingsAPI";
import Hero from "../Components/Hero/Hero";
import Banner from "../Components/Banner/Banner";
// import Signup from "../Pages/Signup";
import Table from "../Pages/Table";
// import Registration from "../Components/sections/reservePages/BookingForm";
// import RoomContainer from "../Components/RoomsContainer/RoomsContainer";

import { Link } from "react-router-dom";

export default function BookingPage() {
  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  return (
    <>
      {/* <p>Registration page 
        
      </p> */}
      <Hero hero="roomsHero">
         <Banner title="Registration">
         <Link to="/" className="btn-primary">
            return home
          </Link>
         </Banner>
       </Hero>
       
       <Table />



       

      {/* <Heading /> */}
      {/* <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} /> */}

      {/* <ReservationForm  /> */}
          </>
  );
}

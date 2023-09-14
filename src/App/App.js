import "./App.css";

// import react-router-dom
import { Route, Switch } from "react-router-dom";

// imports pages
import Home from "../Pages/Home";
import Room from "../Pages/Room";
import Reservation from "../Pages/BookingPage";
import SingleRoom from "../Pages/SingleRoom";
import Confirmation from "../Pages/Confirmation";
import Menu from "../Pages/Menu";
import Error from "../Pages/Error";
import Signout from "../Pages/Signout";
import Admin from "../Pages/Admin";


// import places from "../Pages/places";


// import components
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
// import Form from "../Pages/Form";
import Signup from "../Pages/Signup";
import Signin from "../Pages/Signin";
import Bookings from "../Pages/Bookings";



import places from "../Pages/places";
// import Footer from "../Components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Room} />
        <Route path="/reservations" component={Reservation} />
        <Route path="/confirmation" component={Confirmation} />
        <Route exact path="/places" component={places} />
        {/* <Route exact path="/form" component={Form} /> */}
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/bookings" component={Bookings} />
        <Route  exact path="/signout" component={Signout} />
        <Route  exact path="/Admin" component={Admin} />
        {/* <Route exact path="/places" component={Form} /> */}
        <Route exact path="/rooms/:slug" component={SingleRoom} />

        <Route path="/Menu" component={Menu} />
        <Route component={Error} />
      </Switch>
      {/* <Footer /> */}
    </>
  );
}

 export default App;

// // import React, { useState, useEffect } from "react";
// // import axios from "axios";

// // function App() {
// //   const [userData, setUserData] = useState([]);

// //   useEffect(() => {
// //     axios.get("http://localhost:8081/user").then((response) => {
// //       setUserData(response.data);
// //     });
// //   }, []);

// //   return (
// //     <div>
// //       {userData.map((user) => (
// //         <div key={user.id}>
// //           <p>Name: {user.name}</p>
// //           <p>Email: {user.email}</p>
// //         </div>
// //       ))}
// //     </div>
// //   );
// // }

// // export default App;

// import React from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import AddUserForm from "../Pages/Form";;
// import "./App.css";

// function App() {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/">Home</Link>
//             </li>
//             <li>
//               <Link to="/add-user">Add User</Link>
//             </li>
//           </ul>
//         </nav>

//         <Switch>
//           <Route path="/add-user">
//             <AddUserForm />
//           </Route>
//           <Route path="/">
//             <p>From Backend</p>
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;

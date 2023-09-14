import React, { Component } from "react";

// import react-router-dom
import { Link } from "react-router-dom";

// import assets
import Logo from "../../assets/img/svg/logo.svg";
import { FaAlignRight } from "react-icons/fa";

export default class Navbar extends Component {
  // handleSubmit = (event) => {
  //   event.preventDefault();
  //   // const data = { email, password };
  //  fetch('http://localhost:8081/signout')
  // .then(response => {
  //   if (response.ok) {
  //     alert('Signout successful');
  //     // redirect to login page or other page as needed
  //   } else {
  //     console.error('Error signing out:', response.statusText);
  //   }
  // })
  //     .catch(error => console.error('Error signing out:', error));

  // };

  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  
  render() {
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            {/* app logo */}
            <Link to="/">
              <img src={Logo} alt="Reach Resort" />
            </Link>

            {/* navbar toggle button */}
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          {/* navbar link */}
          <ul
            className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/Menu">Menu</Link>
            </li>
            <li>
              <Link to="/places">places</Link>
            </li>
            {/* <li>
              <Link to="/form">form</Link>
            </li> */}
            <li>
              <Link to="/signup">Signup</Link>
            </li>
            <li>
              <Link to="/signin">Signin</Link>
            </li>
            <li>
              <Link to="/signout"  >logout</Link>
            </li>
            <li>
              <Link to="/Admin"  >Admin</Link>
            </li>

          </ul>

        </div>
      </nav>
    );
  }
}

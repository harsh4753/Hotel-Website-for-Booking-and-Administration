
// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { Link } from 'react-router-dom';


// const FormContainer = styled.form`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   width: 100%;
//   max-width: 500px;
//   margin: 0 auto;

//   label {
//     margin: 10px 0;
//     font-size: 1.2rem;
//   }

//   input {
//     width: 100%;
//     padding: 10px;
//     margin: 5px 0;
//     border-radius: 5px;
//     border: 1px solid #ccc;
//   }

//   .error {
//     color: red;
//     font-size: 0.8rem;
//     margin-top: 5px;
//   }

//   button {
//     background-color: #007bff;
//     color: #fff;
//     padding: 10px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: all 0.3s ease-in-out;

//     &:hover {
//       background-color: #0062cc;
//     }
//   }
// `;

// function SignUpForm({ switchToSignIn }) {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   const validateInputs = () => {
//     const errors = {};

//     if (!name.trim()) {
//       errors.name = "Please enter a name";
//     }

//     if (!email.trim()) {
//       errors.email = "Please enter an email address";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Please enter a valid email address";
//     }

//     if (!password) {
//       errors.password = "Please enter a password";
//     } else if (password.length < 8) {
//       errors.password = "Password must be at least 8 characters";
//     }

//     if (!confirmPassword) {
//       errors.confirmPassword = "Please confirm your password";
//     } else if (password !== confirmPassword) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     return errors;
//   };
//   const setFormType = (type) => {
//     setErrors({});
//     setEmail("");
//     setPassword("");
//     setName("");
//     setConfirmPassword("");
//     setFormType(type);
//   };
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateInputs();

//     if (Object.keys(errors).length) {
//       setErrors(errors);
//       return;
//     }

//     axios
//       .post("http://localhost:8081/reservation", { name, email, password })
//       .then((response) => {
//         console.log(response.data);
//         // reset the form
//         setName("");
//         setEmail("");
//         setPassword("");
//         setConfirmPassword("");
//         setErrors({});
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <FormContainer onSubmit={handleSubmit}>
//       <label>Name:</label>
//       <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//       {errors.name && <div className="error">{errors.name}</div>}
//       <label>Email:</label>
//       <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//       {errors.email && <div className="error">{errors.email}</div>}
//       <label>Password:</label>
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//       {errors.password && <div className="error">{errors.password}</div>}
//       <label>ConfirmPassword:</label>
// <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
// {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
// <button type="submit">Sign Up</button>
// <div>Already have an account? <a href="#" onClick={() => setFormType("signin")}>Sign In</a></div>
// </FormContainer>
// );

// }
// export default SignUpForm;

import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
// import { Link } from 'react-router-dom';
import { useHistory } from "react-router-dom";


const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 500px;
  margin: 0 auto;

  label {
    margin: 10px 0;
    font-size: 1.2rem;
  }

  input, select, textarea {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  .error {
    color: red;
    font-size: 0.8rem;
    margin-top: 5px;
  }

  button {
    background-color: #007bff;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #0062cc;
    }
  }
`;

function ReservationForm({ switchToSignIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [numOfPeople, setNumOfPeople] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [occasion, setOccasion] = useState("");
  const [seatingPreference, setSeatingPreference] = useState("");
  const [additionalComments, setAdditionalComments] = useState("");
  const [errors, setErrors] = useState({});
  const history = useHistory();

  const validateInputs = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = "Please enter a name";
    }

    if (!email.trim()) {
      errors.email = "Please enter an email address";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!phoneNumber.trim()) {
      errors.phoneNumber = "Please enter a phone number";
    } else if (!/^\d+$/.test(phoneNumber)) {
      errors.phoneNumber = "Please enter a valid phone number";
    }

    if (!numOfPeople) {
      errors.numOfPeople = "Please select the number of people";
    }

    if (!date) {
      errors.date = "Please select a date";
    }

    if (!time) {
      errors.time = "Please select a time";
    }

    if (!occasion) {
      errors.occasion = "Please enter an occasion";
    }

    if (!seatingPreference) {
      errors.seatingPreference = "Please enter a seating preference";
    }

    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInputs();

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    axios
      .post("http://localhost:8081/reservation", { 
        name, 
        email, 
        phoneNumber,
        numOfPeople,
        date,
        time,
        occasion,
        seatingPreference,
        additionalComments 
      })
      .then((response) => {
        console.log(response.data);
        // reset the form
        setName("");
        setEmail("");
        setPhoneNumber("");
        setNumOfPeople("");
        setDate.setErrors({});
    })
    .catch((error) => {
    console.log(error);
    });
    history.push("/"); // redirect to home page

    };
    
    return (
    <FormContainer onSubmit={handleSubmit}>
    <label>Name:</label>
    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
    {errors.name && <div className="error">{errors.name}</div>}
    <label>Email:</label>
    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
    {errors.email && <div className="error">{errors.email}</div>}
    <label>Phone Number:</label>
    <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
    {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
    <label>Number of People:</label>
    <select value={numOfPeople} onChange={(e) => setNumOfPeople(e.target.value)}>
    <option value="">Select number of people</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
    <option value="6">6</option>
    <option value="7">7</option>
    <option value="8">8</option>
    <option value="9">9</option>
    <option value="10">10</option>
    </select>
    {errors.numOfPeople && <div className="error">{errors.numOfPeople}</div>}
    <label>Date:</label>
    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
    {errors.date && <div className="error">{errors.date}</div>}
    <label>Time:</label>
    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
    {errors.time && <div className="error">{errors.time}</div>}
    <label>Occasion:</label>
    <input type="text" value={occasion} onChange={(e) => setOccasion(e.target.value)} />
    {errors.occasion && <div className="error">{errors.occasion}</div>}
    <label>Seating Preferences:</label>
    <input type="text" value={seatingPreference} onChange={(e) => setSeatingPreference(e.target.value)} />
    {errors.seatingPreference && <div className="error">{errors.seatingPreference}</div>}
    <label>Additional Comments:</label>
    <textarea value={additionalComments} onChange={(e) => setAdditionalComments(e.target.value)} />
    {errors.additionalComments && <div className="error">{errors.additionalComments}</div>}
    <button type="submit">Submit Reservation</button>
    </FormContainer>
    );
    }
    
    export default ReservationForm;
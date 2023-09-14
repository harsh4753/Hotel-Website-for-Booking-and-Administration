// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";

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
//       .post("http://localhost:8081/signup", { name, email, password })
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
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory(); // add useHistory hook

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { email, password };
    fetch("http://localhost:8081/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.error) {
          alert(data.error);
        } else {
          alert(data.message);
          history.push("/"); // redirect to home page
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;






























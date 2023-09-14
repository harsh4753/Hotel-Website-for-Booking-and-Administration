
// // // runnable code 

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

// function AddUserForm() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
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

//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateInputs();

//     if (Object.keys(errors).length) {
//       setErrors(errors);
//       return;
//     }

//     axios
//       .post("http://localhost:8081/user", { name, email })
//       .then((response) => {
//         console.log(response.data);
//         // reset the form
//         setName("");
//         setEmail("");
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
//       <button type="submit">Add User</button>
//     </FormContainer>
//   );
// }

// export default AddUserForm;











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

// function AddUserForm() {
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

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateInputs();

//     if (Object.keys(errors).length) {
//       setErrors(errors);
//       return;
//     }

//     axios
//       .post("http://localhost:8081/user", { name, email, password })
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
//       <label>Confirm Password:</label>
//       <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//   {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//   <button type="submit">Add User</button>
// </FormContainer>
// );
// }

// export default AddUserForm;


import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from 'react-router-dom';


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

  input {
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

function Reservetable({ switchToSignIn }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});

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

    if (!password) {
      errors.password = "Please enter a password";
    } else if (password.length < 8) {
      errors.password = "Password must be at least 8 characters";
    }

    if (!confirmPassword) {
      errors.confirmPassword = "Please confirm your password";
    } else if (password !== confirmPassword) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };
  const setFormType = (type) => {
    setErrors({});
    setEmail("");
    setPassword("");
    setName("");
    setConfirmPassword("");
    setFormType(type);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateInputs();

    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    axios
      .post("http://localhost:8081/signup", { name, email, password })
      .then((response) => {
        console.log(response.data);
        // reset the form
        setName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setErrors({});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && <div className="error">{errors.name}</div>}
      <label>Email:</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <div className="error">{errors.email}</div>}
      <label>Password:</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      {errors.password && <div className="error">{errors.password}</div>}
      <label>ConfirmPassword:</label>
<input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
{errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
<button type="submit">Sign Up</button>
<div>Already have an account? <a href="#" onClick={() => setFormType("signin")}>Sign In</a></div>
</FormContainer>
);

}
export default Reservetable;































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

//   .success {
//     color: green;
//     font-size: 1rem;
//     margin-top: 10px;
//     text-align: center;
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

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");

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

//     if (!city.trim()) {
//       errors.city = "Please enter a city";
//     }

//     if (!phoneNumber.trim()) {
//       errors.phoneNumber = "Please enter a phone number";
//     } else if (!/^[0-9]+$/.test(phoneNumber)) {
//       errors.phoneNumber = "Please enter a valid phone number";
//     }

//     if (!password.trim()) {
//       errors.password = "Please enter a password";
//     } else if (password.length < 6) {
//       errors.password = "Password must be at least 6 characters long";
//     }

//     if (!confirmPassword.trim()) {
//       errors.confirmPassword = "Please confirm your password";
//     } else if (confirmPassword !== password) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateInputs();

//     if (Object.keys(errors).length) {
//       setErrors(errors);
//       return;
//     }

//     axios
//       .post("http://localhost:8081/user", { name, email, city, phoneNumber, password })
//       .then((response) => {
//         console.log(response.data);
//         setSuccessMessage("User added successfully");
//         setName("");
//         setEmail("");
//         setCity("");
//         setPhoneNumber("");
//         setPassword("");
//         setConfirmPassword("");
//         setErrors({});
//       })
//       .catch((error) => {
//         console.log(error);
//         setErrors({ submit: "Error adding user" });
//         });
//         };
        
//         return (
//         <FormContainer onSubmit={handleSubmit}>
//         <label>Name:</label>
//         <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         {errors.name && <div className="error">{errors.name}</div>}
//         <label>Email:</label>
//         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//         {errors.email && <div className="error">{errors.email}</div>}
//         <label>City:</label>
//         <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
//         {errors.city && <div className="error">{errors.city}</div>}
//         <label>Phone Number:</label>
//         <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//         {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
//         <label>Password:</label>
//         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//         {errors.password && <div className="error">{errors.password}</div>}
//         <label>Confirm Password:</label>
//         <input
//         type="password"
//         value={confirmPassword}
//         onChange={(e) => setConfirmPassword(e.target.value)}
//         />
//         {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//         {errors.submit && <div className="error">{errors.submit}</div>}
//         {successMessage && <div className="success">{successMessage}</div>}
//         <button type="submit">Add User</button>
//         </FormContainer>
//         );
//         }
        
//         export default Signup;



// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

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

// function Signup() {
//     const history = useHistory();
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [city, setCity] = useState("");
//     const [phoneNumber, setPhoneNumber] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [errors, setErrors] = useState({});

//     const validateInputs = () => {
//         const errors = {};

//         if (!name.trim()) {
//             errors.name = "Please enter your name";
//         }

//         if (!email.trim()) {
//             errors.email = "Please enter your email address";
//         } else if (!/\S+@\S+\.\S+/.test(email)) {
//             errors.email = "Please enter a valid email address";
//         }

//         if (!city.trim()) {
//             errors.city = "Please enter your city";
//         }

//         if (!phoneNumber.trim()) {
//             errors.phoneNumber = "Please enter your phone number";
//         } else if (!/^\d{10}$/.test(phoneNumber)) {
//             errors.phoneNumber = "Please enter a valid phone number";
//         }

//         if (!password.trim()) {
//             errors.password = "Please enter a password";
//         } else if (password.length < 8) {
//             errors.password = "Password must be at least 8 characters long";
//         }

//         if (!confirmPassword.trim()) {
//             errors.confirmPassword = "Please confirm your password";
//         } else if (confirmPassword !== password) {
//             errors.confirmPassword = "Passwords do not match";
//         }

//         return errors;
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const errors = validateInputs();

//         if (Object.keys(errors).length) {
//             setErrors(errors);
//             return;
//         }

//         axios
//             .post("http://localhost:8081/signup", {
//                 name,
//                 email,
//                 city,
//                 phoneNumber,
//                 password,
//                 confirmPassword,
//             })
//             .then((response) => {
//                 console.log(response.data);
//                 alert("User created successfully");
//                 history.push("/signin");
//             })
//             .catch((error) => {
//                 console.log(error);
//             });
//     };

//     return (
//         <FormContainer onSubmit={handleSubmit}>
//             <label>Name:</label>
//             <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//             {errors.name && <div className="error">{errors.name}</div>}

//             <label>Email:</label>
//             <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//             {errors.email && <div className="error">{errors.email}</div>}
//             <label>City:</label>
//             <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
//             {errors.city && <div className="error">{errors.city}</div>}
//             <label>Phone Number:</label>
//             <input type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//             {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
//             <label>Password:</label>
//             <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//             {errors.password && <div className="error">{errors.password}</div>}
//             <label>Confirm Password:</label>
//             <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />

//             {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//             {/* {successMessage && <div className="success">{successMessage}</div>} */}
//             <button type="submit">Sign Up</button>
//         </FormContainer>
//     );
// }

// export default Signup;















// import React, { useState } from "react";
// import styled from "styled-components";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

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

// function Signup() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [city, setCity] = useState("");
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const [successMessage, setSuccessMessage] = useState("");
//   const history = useHistory();

//   const validateInputs = () => {
//     const errors = {};

//     if (!name.trim()) {
//       errors.name = "Please enter your name";
//     }

//     if (!email.trim()) {
//       errors.email = "Please enter your email address";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "Please enter a valid email address";
//     }

//     if (!city.trim()) {
//       errors.city = "Please enter your city";
//     }

//     if (!phoneNumber.trim()) {
//       errors.phoneNumber = "Please enter your phone number";
//     } else if (!/^\d{10}$/.test(phoneNumber)) {
//       errors.phoneNumber = "Please enter a valid phone number";
//     }

//     if (!password.trim()) {
//       errors.password = "Please enter a password";
//     } else if (password.trim().length < 6) {
//       errors.password = "Password should be at least 6 characters long";
//     }

//     if (!confirmPassword.trim()) {
//       errors.confirmPassword = "Please confirm your password";
//     } else if (password.trim() !== confirmPassword.trim()) {
//       errors.confirmPassword = "Passwords do not match";
//     }

//     return errors;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const errors = validateInputs();

//     if (Object.keys(errors).length) {
//       setErrors(errors);
//       return;
//     }

//     axios
//       .post("http://localhost:8081/user", { name, email, city, phoneNumber, password })
//       .then((response) => {
//         console.log(response.data);
//         setSuccessMessage("User added successfully");
//         setName("");
//         setEmail("");
//         setCity("");
//         setPhoneNumber("");
//         setPassword("");
//         setConfirmPassword("");
//          // redirect to sign in page
//     history.push("/signin");
// })
// .catch((error) => {
//   console.log(error);
// });
// };
// return (
//     <FormContainer onSubmit={handleSubmit}>
//     <label>Name:</label>
//     <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//     {errors.name && <div className="error">{errors.name}</div>}
//     <label>Email:</label>
//     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
//     {errors.email && <div className="error">{errors.email}</div>}
//     <label>City:</label>
//     <input type="text" value={city} onChange={(e) => setCity(e.target.value)} />
//     {errors.city && <div className="error">{errors.city}</div>}
//     <label>Phone Number:</label>
//     <input type="tel" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//     {errors.phoneNumber && <div className="error">{errors.phoneNumber}</div>}
//     <label>Password:</label>
//     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
//     {errors.password && <div className="error">{errors.password}</div>}
//     <label>Confirm Password:</label>
//     <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
//     {errors.confirmPassword && <div className="error">{errors.confirmPassword}</div>}
//     {successMessage && <div className="success">{successMessage}</div>}
//     <button type="submit">Sign Up</button>
//     </FormContainer>
//     );
//     }
    
//     export default Signup;

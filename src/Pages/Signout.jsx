import React from "react";
import { useHistory } from "react-router-dom";

function Logout() {
  const history = useHistory();

  const handleLogout = () => {
    fetch("/api/logout")
      .then((response) => {
        if (response.ok) {
          localStorage.removeItem("user");
          history.push("/");
        } else {
          console.error("Error logging out:", response.statusText);
        }
      })
      .catch((error) => console.error("Error logging out:", error));
  };

  return (
    <div>
      <h2>Logout</h2>
      <p>Are you sure you want to log out?</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;

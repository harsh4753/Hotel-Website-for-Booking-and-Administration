// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ReservationsTable() {
//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     // Fetch reservations data from the API
//     axios.get('/bookings')
//       .then(response => {
//         setReservations(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone Number</th>
//           <th>Number of People</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Occasion</th>
//           <th>Seating Preference</th>
//           <th>Additional Comments</th>
//           <th>Created At</th>
//         </tr>
//       </thead>
//       <tbody>
//         {reservations.map(reservation => (
//           <tr key={reservation.id}>
//             <td>{reservation.id}</td>
//             <td>{reservation.name}</td>
//             <td>{reservation.email}</td>
//             <td>{reservation.phone_number}</td>
//             <td>{reservation.num_of_people}</td>
//             <td>{reservation.date}</td>
//             <td>{reservation.time}</td>
//             <td>{reservation.occasion}</td>
//             <td>{reservation.seating_preference}</td>
//             <td>{reservation.additional_comments}</td>
//             <td>{reservation.created_at}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default ReservationsTable;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function ReservationsTable() {
//   const [reservations, setReservations] = useState([]);

//   useEffect(() => {
//     // Fetch reservations data from the API
//     axios.get('/bookings')
//       .then(response => {
//         setReservations(response.data);
//       })
//       .catch(error => {
//         console.log(error);
//       });
//   }, []);

//   return (
//     <table>
//       <thead>
//         <tr>
//           <th>ID</th>
//           <th>Name</th>
//           <th>Email</th>
//           <th>Phone Number</th>
//           <th>Number of People</th>
//           <th>Date</th>
//           <th>Time</th>
//           <th>Occasion</th>
//           <th>Seating Preference</th>
//           <th>Additional Comments</th>
//           <th>Created At</th>
//         </tr>
//       </thead>
//       <tbody>
//         {reservations.map(reservation => (
//         //   <tr key={reservation.id}>
//         //     <td>{reservation.id}</td>
//         //     <td>{reservation.name}</td>
//         //     <td>{reservation.email}</td>
//         //     <td>{reservation.phone_number}</td>
//         //     <td>{reservation.num_of_people}</td>
//         //     <td>{reservation.date}</td>
//         //     <td>{reservation.time}</td>
//         //     <td>{reservation.occasion}</td>
//         //     <td>{reservation.seating_preference}</td>
//         //     <td>{reservation.additional_comments}</td>
//         //     <td>{reservation.created_at}</td>
//         //   </tr>
//         <tr >
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//             <td>Dev</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// }

// export default ReservationsTable;



import React, { useState, useEffect } from 'react';

function ReservationsTable() {
    const tableStyle = {
        borderCollapse: 'collapse',
        width: '100%',
        marginBottom: '20px',
      };
    
      const thStyle = {
        backgroundColor: '#f2f2f2',
        fontWeight: 'bold',
      };
    
      const evenRowStyle = {
        backgroundColor: '#f2f2f2',
      };
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8081/bookings')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1>Data from MySQL Table</h1>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thStyle}>ID</th>
            <th style={thStyle}>Name</th>
            <th style={thStyle}>Email</th>
            <th style={thStyle}>Phone Number</th>
            <th style={thStyle}>Number of People</th>
            <th style={thStyle}>Date</th>
            <th style={thStyle}>Time</th>
            <th style={thStyle}>Occasion</th>
            <th style={thStyle}>Seating Preference</th>
            <th style={thStyle}>Additional Comments</th>
            <th style={thStyle}>Created At</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={row.id} style={index % 2 === 0 ? evenRowStyle : null}>
              <td>{row.id}</td>
              <td>{row.name}</td>
              <td>{row.email}</td>
              <td>{row.phone_number}</td>
              <td>{row.num_of_people}</td>
              <td>{row.date}</td>
              <td>{row.time}</td>
              <td>{row.occasion}</td>
              <td>{row.seating_preference}</td>
              <td>{row.additional_comments}</td>
              <td>{row.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReservationsTable;



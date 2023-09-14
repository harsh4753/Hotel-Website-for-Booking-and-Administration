// // runnable 

// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database: " + err.stack);
//     return;
//   }
//   console.log("Connected to database as id " + db.threadId);
// });

// app.get("/", (req, res) => {
//   return res.json("From Backend");
// });

// app.post("/user", (req, res) => {
//   const { name, email } = req.body;
//   const sql = "INSERT INTO form (name, email) VALUES (?, ?)";
//   db.query(sql, [name, email], (err, result) => {
//     if (err) {
//       console.error("Error inserting data: " + err.stack);
//       return res.status(500).json({ error: "Error inserting data" });
//     }
//     console.log("Data inserted successfully");
//     return res.json("User added successfully");
//   });
// });


// app.listen(8081, () => {
//   console.log("Listening");
// });













// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database: " + err.stack);
//     return;
//   }
//   console.log("Connected to database as id " + db.threadId);
// });

// app.get("/", (req, res) => {
//   return res.json("From Backend");
// });

// app.post("/user", (req, res) => {
//   const { name, email, password } = req.body;
//   const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
//   db.query(sql, [name, email, password], (err, result) => {
//     if (err) {
//       console.error("Error inserting data: " + err.stack);
//       return res.status(500).json({ error: "Error inserting data" });
//     }
//     console.log("Data inserted successfully");
//     return res.json("User added successfully");
//   });
// });

// app.listen(8081, () => {
//   console.log("Listening");
// });





//server.js

const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to database: " + err.stack);
    return;
  }
  console.log("Connected to database as id " + db.threadId);
});

app.get("/", (req, res) => {
  return res.json("From Backend");
});

app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;
  const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
  db.query(sql, [name, email, password], (err, result) => {
    if (err) {
      console.error("Error inserting data: " + err.stack);
      return res.status(500).json({ error: "Error inserting data" });
    }
    console.log("Data inserted successfully");
    return res.json("User added successfully");
  });
});

app.post("/signin", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM user WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error querying data: " + err.stack);
      return res.status(500).json({ error: "Error querying data" });
    }
    if (result.length === 0) {
      console.log("Invalid email or password");
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    console.log("Data queried successfully");
    return res.json({ success: true, message: "User logged in successfully" });
  });
});
app.post("/Admin", (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
  db.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error("Error querying data: " + err.stack);
      return res.status(500).json({ error: "Error querying data" });
    }
    if (result.length === 0) {
      console.log("Invalid email or password");
      return res.status(401).json({ success: false, message: "Invalid email or password" });
    }
    console.log("Data queried successfully");
    return res.json({ success: true, message: "Admin logged in successfully" });
  });
});

app.post("/reservation", (req, res) => {
  const { name, email, phoneNumber, numOfPeople, date, time, occasion, seatingPreference, additionalComments } = req.body;
  const sql = "INSERT INTO reservations (name, email, phone_number, num_of_people, date, time, occasion, seating_preference, additional_comments ) VALUES (?, ?, ?,?, ?, ?,?, ?, ?)";
  db.query(sql, [name, email, phoneNumber, numOfPeople, date, time, occasion, seatingPreference, additionalComments], (err, result) => {
    if (err) {
      console.error("Error inserting data: " + err.stack);
      return res.status(500).json({ error: "Error inserting data" });
    }
    console.log("Data inserted successfully");
    return res.json("User added successfully");
  });
});

app.post("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error("Error logging out:", err);
      res.status(500).send("Error logging out");
    } else {
      return res.json("successful");

    }
    console.log("logout successful");

  });
});
app.post('/book', (req, res) => {


  const { slug, name, price, size } = req.body;

  // create SQL query for inserting room data
  const query = "INSERT INTO room (slug, name, price, size) VALUES (?,?,?,?)";

  // execute the query
  db.query(query,[slug, name, price, size], (err, results) => {
    if (err) {
      console.error('Error inserting room data: ', err);
      res.status(500).send('Error inserting room data.');
    } else {
      console.log('Room data inserted successfully.');
      res.send('Room data inserted successfully.');
    }
  });
});

// app.get('/bookings', async (req, res) => {
//   try {
//     // Connect to the MySQL database
//     const connection = await mysql.createConnection(dbConfig);

//     // Query the reservations table
//     const [rows] = await connection.query('SELECT * FROM reservations');

//     // Send the reservations data as a JSON response
//     res.json(rows);

//     // Close the database connection
//     connection.end();
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Internal server error');
//   }
// });
// app.get('/bookings', async (req, res) => {
//   try {
//     // Connect to the MySQL database
//     const connection = await mysql.createConnection({
//       host: 'localhost',
//       user: 'root',
//       password: '',
//       database: 'test'
//     });

//     // Query the reservations table
//     const [rows] = await connection.query('SELECT * FROM reservations');

//     // Send the reservations data as a JSON response
//     res.json(rows);

//     // Close the database connection
//     connection.end();
//   } catch (error) {
//     console.log(error);
//     res.status(500).send('Internal server error');
//   }
// });
// app.get('/bookings', (req, res) => {
  
//   const sql = "SELECT * FROM reservations";
//   db.query(sql, (err, result) => {
//     if (err) {
//       console.error("Error querying data: " + err.stack);
//       return res.status(500).json({ error: "Error querying data" });
//     }
//     if (result.length === 0) {
//       console.log("Invalid email or password");
//       return res.status(401).json({ success: false, message: "Invalid email or password" });
//     }
//     console.log("Data queried successfully");
//     //  res.json({ success: true, message: "Admin logged in successfully" });
//      res.json(result);
//   })
// });
app.get('/bookings', (req, res) => {
  
  const sql = "SELECT * FROM reservations";
  db.query(sql, (err, result) => {
    if (err) {
      console.error("Error querying data: " + err.stack);
      return res.status(500).json({ error: "Error querying data" });
    }
    console.log("Data queried successfully");
    res.json(result);
  })
});

app.listen(8081, () => {
  console.log("Listening");
});





// app.post("/reservation", (req, res) => {
//   const { name, email, password } = req.body;
//   const sql = "INSERT INTO user (name, email, password) VALUES (?, ?, ?)";
//   db.query(sql, [name, email, password], (err, result) => {
//     if (err) {
//       console.error("Error inserting data: " + err.stack);
//       return res.status(500).json({ error: "Error inserting data" });
//     }
//     console.log("Data inserted successfully");
//     return res.json("User added successfully");
//   });
// });


























































































































































// test code
// this code error in adding user

// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
// host: "localhost",
// user: "root",
// password: "",
// database: "test",
// });

// db.connect((err) => {
// if (err) {
// console.error("Error connecting to database: " + err.stack);
// return;
// }
// console.log("Connected to database as id " + db.threadId);
// });

// app.get("/", (req, res) => {
// return res.json("From Backend");
// });

// app.post("/user", (req, res) => {
// const { name, email, city, phoneNumber, password, confirmPassword } = req.body;
// const errors = {};

// if (!name.trim()) {
// errors.name = "Please enter a name";
// }

// if (!email.trim()) {
// errors.email = "Please enter an email address";
// } else if (!/\S+@\S+.\S+/.test(email)) {
// errors.email = "Please enter a valid email address";
// }

// if (!city.trim()) {
// errors.city = "Please enter a city";
// }

// if (!phoneNumber.trim()) {
// errors.phoneNumber = "Please enter a phone number";
// } else if (!/^\d{10}$/.test(phoneNumber)) {
// errors.phoneNumber = "Please enter a valid phone number";
// }

// if (!password) {
// errors.password = "Please enter a password";
// } else if (password.length < 6) {
// errors.password = "Password should have at least 6 characters";
// }

// if (password !== confirmPassword) {
// errors.confirmPassword = "Passwords do not match";
// }

// if (Object.keys(errors).length) {
// return res.status(400).json({ errors });
// }

// const sql = "INSERT INTO signup (name, email, city, phone_number, password) VALUES (?, ?, ?, ?, ?)";
// db.query(sql, [name, email, city, phoneNumber, password], (err, result) => {
// if (err) {
// console.error("Error inserting data: " + err.stack);
// return res.status(500).json({ error: "Error inserting data" });
// }
// console.log("Data inserted successfully");
// return res.json({ message: "User added successfully" });
// });
// });

// app.listen(8081, () => {
// console.log("Listening");
// });





// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "test",
// });

// db.connect((err) => {
//   if (err) {
//     console.error("Error connecting to database: " + err.stack);
//     return;
//   }
//   console.log("Connected to database as id " + db.threadId);
// });

// app.get("/", (req, res) => {
//   return res.json("From Backend");
// });

// app.post("/signup", (req, res) => {
//   const { name, email, city, phoneNumber, password } = req.body;
//   const sql = "INSERT INTO signup (name, email, city, phone_number, password) VALUES (?, ?, ?, ?, ?)";
//   db.query(sql, [name, email, city, phoneNumber, password], (err, result) => {
//     if (err) {
//       console.error("Error inserting data: " + err.stack);
//       return res.status(500).json({ error: "Error inserting data" });
//     }
//     console.log("Data inserted successfully");
//     return res.json({ message: "User added successfully" });
//   });
// });

// app.listen(8081, () => {
//   console.log("Listening");
// });

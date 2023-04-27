const express = require('express');
const mysql = require('mysql');

const app = express();

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cyberclinic"
});

app.use(express.json());

app.post('/register', (req, res) => {
  const { name, age, designation, phone, email, gender } = req.body;

  const cartId = Math.floor(Math.random() * 5001);

  const sqlquery = `INSERT INTO user (cartq_id, name, age, designation, phone, email, total_duration, final_cq) 
    VALUES (${cartId}, '${name}', ${age}, '${designation}', '${phone}', '${email}', 0, 0)`;

  con.query(sqlquery, (err, result) => {
    if (err) throw err;

    res.status(200).json({ message: 'User created successfully.' });
  });
});

app.listen(3000, () => console.log('Server started on port 3000.'));

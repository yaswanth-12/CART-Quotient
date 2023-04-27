
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "cyberclinic"
});

// Requiring modules
const express = require('express');
const app = express();
const mssql = require("mysql");

// Get request
app.get('/', function (req, res) {

  // Config your database credential
  const config = {
    host: "localhost",
    user: "root",
    password: "",
    database: "cyberclinic"
  };

  // Connect to your database
  mssql.connect(config, function (err) {

    // Create Request object to perform
    // query operation
    let request = new mssql.Request();

    // Query to the database and get the records
    request.query('select * from user',
      function (err, records) {

        if (err) console.log(err)

        // Send records as a response
        // to browser
        res.send(records);

      });
  });
});

let server = app.listen(5000, function () {
  console.log('Server is listening at port 5000...');
});


con.connect(function (err) {

  if (err) throw err;
  console.log("Connected!");

  let _name = document.getElementById('name');
  let _age = document.getElementById('age');
  let _email = document.getElementById('email');
  let _pnumb = document.getElementById('phonenumber');
  // let _gender = document.getElementById('gender');
  let _designation = document.getElementById('designation');
  let _cartId = Math.floor(Math.random() * 5001);
  sqlquery = "INSERT INTO `user` (`cartq_id`, `name`, `age`, `designation`, `phone`, `email`, `total_duration`, `final_cq`) VALUES ('" + _cartId + "','" + _name + "', '" + _age + "', '" + _designation + "', '" + _pnumb + "', '" + _email + "', '0', '0') "

  con.query(sqlquery, function (err, result) {

    if (err) throw err;
    console.log("User created succesfully.");

  });

});
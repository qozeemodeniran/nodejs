// create connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DB successfully.");
});
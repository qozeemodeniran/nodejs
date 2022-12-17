const { connect } = require('http2');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Successfully connected to DB!");

    // query db: Create DB
    var sql = "CREATE DATABASE node2";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("Database was successfully created!");
    });
});
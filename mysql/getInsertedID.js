var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    var sql = "INSERT INTO test1 (name, email) VALUES('Test User', 'tes.usr@testmail.com')";

    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log("The newly added row ID is: " + result.insertId);
    });
});
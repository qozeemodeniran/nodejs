// create connection
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",

    // tell which database to use
    databse: "node1"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected to DB successfully.");

    // query database
    var sql = "some sql statements";
    connection.query(sql, function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});
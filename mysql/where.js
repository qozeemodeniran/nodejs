var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;

    // get all rows where name ends with 'e': make sure to always escape query values to avoid hacking by injection
    var eml = "qozeem.odeniran@testmail.com";
    var name = "Qozeem Odeniran";
    var sql  = "SELECT * FROM test1 WHERE email = ? OR name = ?"; // method 2
    var sql3  = "SELECT * FROM test1 WHERE email = " + mysql.escape(eml); // method 1
    var sql2 = "SELECT * FROM test1 WHERE name LIKE '%e'";

    connection.query(sql, [eml, name], function(err, result) { //method2
    // connection.query(sql, function(err, result) { //method 1
        if (err) throw err;
        console.log(result);
    });
});
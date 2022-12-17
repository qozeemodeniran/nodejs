var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;
    // console.log("Connected!");

    var sql = "SELECT * FROM test1 ORDER BY name"; // ORDER BY name DESC: to sort by descending order of name.
    var sql2 = "SELECT name, email FROM test1";

    connection.query(sql, function(err, result, fields) {
        if (err) throw err;
        console.log(result);
        // console.log(result[4].name);
        // console.log(fields);
        // console.log(fields[1].name);
    });
});
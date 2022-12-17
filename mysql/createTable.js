var mysql = require('mysql');

var connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"     
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Successful connection.");

    var sql = "CREATE TABLE test2 (name VARCHAR(255), email VARCHAR(255))";

    // alter the tbale to add primary key
    var sql2 = "ALTER TABLE test1 ADD COLUMN id INT AUTO_INCREMENT PRIMARY KEY";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Table successfully created!");
    });
});
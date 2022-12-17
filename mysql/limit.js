var mysql = require('mysql');

var connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"     
});

connection.connect(function (err) {
    if (err) throw err;

    var sql0 = "SELECT * FROM test1 LIMIT 5 OFFSET 2"; // OFFSET: start from position 3

    // a short syntax for LIMIT & OFFSET
    var sql = "SELECT * FROM test1 LIMIT 2, 5"; // start from posiiton 3 and return next five rows.

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
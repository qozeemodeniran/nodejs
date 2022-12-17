var mysql = require('mysql');

var connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"     
});

connection.connect(function (err) {
    if (err) throw err;
    
    var sql1 = "DROP TABLE test2";
    var sql2 = "DROP TABLE IF EXISTS test2";

    connection.query(sql2, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
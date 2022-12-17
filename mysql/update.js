var mysql = require('mysql');

var connection  = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"     
});

connection.connect(function (err) {
    if (err) throw err;
    
    var sql = "UPDATE test1 SET name = 'Qozeem B. Odeniran' WHERE name = 'Qozeem Odeniran'";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " row(s) have been updated.");
    });
});
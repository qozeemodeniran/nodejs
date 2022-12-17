var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;

    var sql = "DELETE FROM test1 WHERE id=11";
    connection.query(sql, function(err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " row(s) have been successfully deleted");
    });
});

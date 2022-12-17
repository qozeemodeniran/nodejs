var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;

    // selecting matching records from both tables (users & products): INNER will give same result.
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";

    var sql2 = "SELECT users.name AS user, products.name AS favorite FROM users INNER JOIN products ON users.favorite_product = products.id";

    connection.query(sql2, function (err, result) {
        if (err) throw err;
        console.log(result);
    })
})
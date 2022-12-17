var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;

    // selecting matching records from both tables (users & products): RIGHT JOIN returns all products, and users who have them as favorite, even if nouserhave them as favorite
    var sql = "SELECT users.name AS user, products.name AS favorite FROM users RIGHT JOIN products ON users.favorite_product = products.id";

    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    })
})
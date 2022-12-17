var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;

    var user_table = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), favorite_product INT)";

    connection.query(user_table, function (err, result) {
        if (err) throw err;
        console.log("Table created.");
    });

    var  users = "INSERT INTO users (name, favorite_product) VALUES ?";
    var arr = [
        ['Qozeem', 101],
        ['Jibril', 101],
        ['Neema', 301],
        ['Zahra', 200],
        ['Mustakim', 200],
    ] ;

    connection.query(users, [arr], function(err, result) {
        if (err) throw err;
        console.log("Rows inserted!");
    })
})
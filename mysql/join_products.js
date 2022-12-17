var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;

    var product_table = "CREATE TABLE products (id INT, name VARCHAR(255))";

    connection.query(product_table, function (err, result) {
        if (err) throw err;
        console.log("Table created.");
    });

    var  porducts = "INSERT INTO products (id, name) VALUES ?";
    var arr = [
        [101, 'Milk'],
        [301, 'Juice'],
        [500, 'Pizza'],
    ] ;

    connection.query(porducts, [arr], function(err, result) {
        if (err) throw err;
        console.log("Rows inserted!");
    })
})
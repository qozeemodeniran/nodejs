var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "lastborn231",
    database: "node2"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");

    // inserting multiple: the ? will replace the array value defined below.
    var sql = "INSERT INTO test1 (name, email) VALUES ?";
    var arr = [
        ['Daniel Evana-Ukene', 'dan.eva@testmail.com'],
        ['John Doe', 'john.doe@testmail.com'],
        ['Jibril Odeniran', 'jib.ode@testmail.com'],
        ['Tabitha Oyewole', 'tab.oye@testmail.com'],
        ['Azeezat Wahab', 'aze.wah@testmail.com'],
        ['Ikeoluwa Akanmu', 'ike.aka@testmail.com'],
        ['Tomi Arokodare', 'tom.aro@testmail.com'],
        ['Suhima Jamal', 'suh.jam@testmail.com'],
        ['Dami Elelegwu', 'dam.ele@testmail.com'],
    ]

    connection.query(sql, [arr], function(err, result) {
        if (err) throw err;
        console.log("A total of " + result.affectedRows + " was inserted sent to a table in the datatbase!");
        console.log(result);
    });
});
// create mongo client object
var MongoClient = require('mongodb').MongoClient;

// specify connection URL: include the database name you want to create
var url = "mongodb://localhost:27017/nodejs";

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    console.log("Database created successfully!");
    db.close();
});

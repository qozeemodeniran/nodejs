var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("nodejsdrop");

    // create the object/document to insert
    var obj = {name: "Affordable Inc", address: "122 Lainer Dr"};

    // insert the object/document into the collection/table
    dbo.collection("customers").insertOne(obj, function(err, res) {
        if (err) throw err;
        // console.log("one document instered");
        console.log(res)
        db.close();
    });
});
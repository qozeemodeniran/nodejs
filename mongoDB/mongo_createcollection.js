var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {

    var dbo = db.db("nodejsdrop");
    dbo.createCollection("customers", function(err, res) {
        if(err) throw err;
        // console.log("Collection created!");
        console.log(res)
        db.close();
    });
});
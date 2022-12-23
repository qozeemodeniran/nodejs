var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
    if(err) throw err;
    var dbo = db.db("nodejsJoin");

    // create an array of objects/documents to insert into the collection
    var obj = [
        { _id: 154, name: 'Chocolate Heaven' },
        { _id: 155, name: 'Tasty Lemons' },
        { _id: 156, name: 'Vanilla Dreams' }
    ]

    // insert the object/document into the collection/table
    dbo.collection("products").insertMany(obj, function(err, res) {
        if (err) throw err;
        console.log("a total of " + res.insertedCount + " documents were insterted.");
        console.log(res.insertedCount);
        db.close();
    });
});

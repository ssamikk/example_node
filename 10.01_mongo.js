const MongoClient = require("mongodb").MongoClient;
    
const url = "mongodb://127.0.0.1:27017/";
const mongoClient = new MongoClient(url);
 
async function run() {
    try {
        await mongoClient.connect();
        const db = mongoClient.db("exampleDb");
        const collection = db.collection("widgets");
        const count = await collection.countDocuments();
        console.log(`В коллекции widgets ${count} документа/ов`);
        let result = await collection.deleteMany({});
        console.log('result of remove ' + result.deletedCount);
        const result2 = await collection.deleteOne({});
        console.log(result2);
        const result3 = await collection.findOneAndDelete({});
        console.log(result3);
        // const result = await collection.drop();
        // console.log(result);    // true|false
        // Создание двух записей
        var widget1 = {title : 'First Great widget',
                          desc : 'greatest widget of all',
                           price : 14.99};
        var widget2 = {title : 'Second Great widget',
                           desc : 'second greatest widget of all',
                           price : 29.99};
        // result = await collection.insertOne(widget1);
        // console.log(result.insertedId);
        let results = await collection.insertMany([widget1, widget2]);
        console.log(results);
        results = await collection.find({price: 1.99}).toArray();
		console.log(results);
        result = await collection.findOne({price : 29.99});
        console.log(result);
        result = await collection.findOneAndUpdate({price : 29.99}, { $set: {age: 25}}, { returnDocument: "after" });
        console.log(result);
        result = await collection.findOne({age : 25});
        console.log(result);
        result = await collection.updateMany({price : 29.99}, { $set: {name: "Tom"}});
        console.log(result);
        result = await collection.updateOne({name: "Tom"}, { $set: {name: "Tom Junior", age:33}});
        console.log(result);
    }catch(err) {
        console.log(err);
    } finally {
        await mongoClient.close();
    }
}
run().catch(console.error);
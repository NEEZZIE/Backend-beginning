const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb+srv://NEEMA:precious123@cluster0.zw4mzd8.mongodb.net/?retryWrites=true&w=majority'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, (error, client) => {
    if (error) {
        return console.log('unable to connect to database')
    }

    const db = client.db(databaseName);
    db.collection("users").insertOne(
        {
            name: "andrew",
            age: 27,
        },
        (error, result) => {
            if (error) {
                return console.log("unable to create user");
            }
            console.log(result);
        }
    );
});
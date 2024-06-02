const express = require("express");
const mongodb = require('mongodb');
const router = express.Router();
router.use(express.json());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://stoopid:froot69@stoopidcluster.8eyel.mongodb.net/?retryWrites=true&w=majority&appName=StoopidCluster";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectToMongo() {
    await client.connect();
    const database = client.db('JasmineDragon');
    return result = database.collection('Flavors');
}

router.get("/", async (req, res) => {
    try {
        await client.connect();
        const collection = await connectToMongo();
        const flavors = await collection.find().toArray();

        if (flavors) {
            res.render('user', { flavors });
        }
        else {
            res.status(404).send("Documents Not Found"); //make an error page instead
        }
    }
    catch (e) {
        console.log("failsauce");
        res.status(500).send("Internal Server Error"); //make an error page instead
    } finally {
        await client.close();
    }
})

router.post('/', async (req, res) => {
    try {
        var name = req.body.name;
        var description = req.body.description;
        var isSeasonal = req.body.isSeasonal;
        let collection;
        collection = await connectToMongo();
        await collection.insertOne({
            Name: name,
            Description: description,
            IsSeasonal: isSeasonal === 'true'
        });
        res.redirect('/user');
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    finally {
        client.close();
    }
})

router.put('/:id', async (req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var description = req.body.description;
    var isSeasonal = req.body.isSeasonal;
    let collection;
    try {
        collection = await connectToMongo();
        var objectId = new mongodb.ObjectId(id);
        await collection.updateOne(
            { _id: objectId},
            { $set: { Name: name, Description: description, IsSeasonal: isSeasonal === 'true' } }
        );
        res.redirect('/user');
    }
    catch (e) {
        res.status(500).send("Add flavor failed.");
    }
    finally {
        client.close();
    }
});

router.delete('/:id', async (req, res) => {
    var id = req.params.id;
    let collection;
    try {
        collection = await connectToMongo();
        var idObject = new mongodb.ObjectId(id);
        await collection.deleteOne(
            { _id: idObject }
        );
        res.redirect('/user');
    }
    catch (e) {
        res.status(500).send(e.message);
    }
    finally {
        client.close();
    }
});

module.exports = router
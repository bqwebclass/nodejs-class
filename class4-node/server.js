const express = require("express");
const { MongoClient } = require('mongodb');
const MONGODB_URI = `mongodb://localhost:27017`;
const MONGO_DB_NAME = `BQ-MongoStart`;

// Mongoose (mongodb) -> ORM -> connect (X), Model, 
// Sequelize, TypeORM, Prisma (MySQL, PostgreSQL) -> ORM


const client = new MongoClient(MONGODB_URI);

const app = express();
app.use(express.json()) // parse your data 

app.get("/", (req, res) => {
    res.json({ message: "This is a test route", })
})

app.get("/api/products", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(MONGO_DB_NAME);
        const productColl = db.collection("products");
        const data = await productColl.findOne();

        return res.send({ success: true, data: data })
    } catch (error) {
        console.log(error);
        return res.send({ success: false, error })
    }
    finally {
        client.close();
    }

})

app.post("/api/products", async (req, res) => {
    const body = req.body;
    console.log(body);

    try {
        await client.connect();
        const db = client.db(MONGO_DB_NAME);
        const collection = db.collection('products');

        await collection.insertOne(body)
    } catch (error) {
        console.log(error);
    } finally {
        client.close()
    }

    return res.send({ success: true, data: null })
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})
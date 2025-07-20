const express = require("express");
const fs = require("fs")

const app = express();
app.use(express.json()) // parse your data 

// JavaScript Object Notation (JSON)

app.get("/", (req, res) => {
    res.json({ message: "This is a test route", })
})

app.get("/products", (req, res) => {
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        const products = JSON.parse(data)
        console.log(err);
        
        res.json({ message: "This is a products route", data: products })
    })
})
app.post("/products", (req, res) => {
    const newData = req.body;
    
    fs.readFile('./data/products.json', 'utf-8', (err, data) => {
        const products = JSON.parse(data)
        products.push(newData);
        
        const dataToBeStored = JSON.stringify(products); // obj -> JSON format
        fs.writeFile("./data/products.json", dataToBeStored, (err) => {
            console.log(err);
        })

        res.json({ message: "This is a products route", data: products })
    })
})


fs.readFile('location+filenmae', 'utf-8', (error, data) => {

})

const PORT = 4002
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})
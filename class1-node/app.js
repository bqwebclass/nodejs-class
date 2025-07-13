const express = require("express");  // require("express") -> return function

const app = express(); // return { ..., listen: ()=>{} }


app.get("/test", (request, response)=>{
    response.json({ message: "this is a test route", name: 'Bilal', age: 20, })
})

app.get("/api/name", (request, response)=>{
    response.json({ message: "this is a route for name", name: 'Ali', age: 40, })
})

app.get("/api/products", (request, response)=>{
    const products = [
        { title: 'Board Marker', price: 100, },
        { title: 'Mobile Cover', price: 300, },
        { title: 'Fan', price: 5000, },
        { title: 'Keyboard', price: 700, },
        { title: 'Mouse', price: 740, },
        { title: 'prod1', price: 80, },
    ]
    response.json(products)
})

app.get("/api/users", (request, response)=>{
    const users = [
        { name: 'Bilal', age: 20, },
        { name: 'Talha', age: 25, },
        { name: 'Zaid', age: 43, },
        { name: 'Ali', age: 53, },
    ]
    response.send(users);
})


const PORT = 5001
app.listen(PORT, ()=>{
    console.log("Server running on Port: localhost:" + PORT);
});
const express = require("express");

const app = express();

// Middleware
app.use(express.json()) // parse / convert by using express

const STUDENTS = [
    { name: 'Bilal Ali', age: 20, rollNum: 201 },
    { name: 'Osama', age: 24, rollNum: 202 },
    { name: 'Ali Muhammad', age: 27, rollNum: 203 },
    { name: 'Hussain Shah', age: 40, rollNum: 204 },
    { name: 'Shahzaib', age: 51, rollNum: 205 },
    { name: 'Bilal Farooq', age: 25, rollNum: 206 },
]

app.get("/student", (req, res)=>{
    // req.query = { name }
    console.log(req.query);
    let filteredStd = STUDENTS;

    if(req.query.age){
        filteredStd = STUDENTS.filter((std)=> std.age == req.query.age)
    }
    if(req.query.name){
        filteredStd = STUDENTS.filter((std)=> std.name.includes(req.query.name))
    }

    res.send({ message: 'This is Test Route for Student', success: true, data: filteredStd });
})

app.get("/student/:rollNum", (req, res)=>{
    // req.params = { rollNum: 'nsnacnasnc' }
    // console.log();
    const rollNum = req.params.rollNum;
    const std = STUDENTS.find((std) => std.rollNum == rollNum)
    res.send({ 
        message: 'This is Test Route for Student', 
        success: true, 
        data: std, 
    });
})
// req.query frontend send key value pair
// req.params frontend hit api with /:id
// Methods
// GET (data pass -> query params, params), 
// POST (send any data in "body")
// PUT (to update data , send any data in body)
// PATCH (to update data , send any data in body)
// DELETE (to update data , send any data in body)

// Query Params, Params
app.post("/student", (req, res)=> {
    console.log(req.body);
    STUDENTS.push(req.body);
    res.send({ 
        message: 'This is Test Route for Student', 
        success: true, 
        data: STUDENTS, 
    });
})       

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server is Running on http://localhost:${PORT}`);
})
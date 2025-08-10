require("dotenv").config() // .env file load
require("./config/db");
const express = require("express");
const logReqBody = require("./middleware/logReqBody");
const authRouter = require("./routes/authRoute");

const app = express();

// Middleware
app.use(express.json()) // parse your data 
app.use(logReqBody)

// Router Middleware
app.use(authRouter)


const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})
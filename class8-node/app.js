require("dotenv").config() // .env file load
require("./config/db");
const express = require("express");
const logReqBody = require("./middleware/logReqBody");
const authRouter = require("./routes/authRoute");
const adminRouter = require("./routes/adminRoute");
const authMiddleware = require("./middleware/authMiddleware");
const roleChecking = require("./middleware/roleChecking");

const app = express();

// Middleware
app.use(express.json()) // parse your data 
app.use(logReqBody)

// Router Middleware
app.use("/api/v1", authRouter)
app.use("/api/v1", authMiddleware, roleChecking("admin"), adminRouter)
// app.use("/api/v1", authMiddleware, roleChecking("teacher"), userRouter)
// app.use("/api/v1", authMiddleware, roleChecking("student"), userRouter)


const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})
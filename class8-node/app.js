require("dotenv").config() // .env file load
require("./config/db");
const express = require("express");
const logReqBody = require("./middleware/logReqBody");
const authRouter = require("./routes/authRoute");
const classRoute = require("./routes/classRoute");
const adminRouter = require("./routes/adminRoute");
const courseRoute = require("./routes/courseRoute");
const authMiddleware = require("./middleware/authMiddleware");
const roleChecking = require("./middleware/roleChecking");

const app = express();

// Middleware
app.use(express.json()) // parse your data 
app.use(logReqBody)

// Router Middleware
app.use("/api/v1", authRouter)
// app.use("/api/v1/course", authMiddleware, roleChecking(["admin", "teacher"]), authRouter)
app.use("/api/v1", authMiddleware, roleChecking(["admin"]), adminRouter)
// app.use("/api/v1", authMiddleware, roleChecking("teacher"), userRouter)
// app.use("/api/v1", authMiddleware, roleChecking("student"), userRouter)
app.use("/api/v1/class", authMiddleware, classRoute)
app.use("/api/v1/course", authMiddleware, courseRoute)


const PORT = process.env.PORT || 3002
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})

// Course CRUD (Admin & Teacher)
// Class CRUD (ADMIN)
// route & controller -> student assign class

// body
// { classId: 'sacsancsan', userId: "ajcnjsancnsa" }


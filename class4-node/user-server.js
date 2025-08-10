require("dotenv").config()
const express = require("express");
const mongoose = require('mongoose'); // ORM (MySQL -> Sequelize, TypeORM, )
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require("./models/User");
const Post = require("./models/Post");
const authMiddleware = require("./middleware/authMiddleware");
const logReqBody = require("./middleware/logReqBody");


// const hasedVal = await bcrypt.hash(password, 10)
const app = express();
app.use(express.json()) // parse your data 
app.use(logReqBody)

console.log("JWT = ", process.env.JWT_SECRET)

mongoose.connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('Database Connected');
  }).catch(err => {
    console.log(err);
  })

  // sign up
app.post("/api/user", async (req, res) => {
    try {
        const body = req.body;
        const hashedPassword = await bcrypt.hash(body.password, 10);
        console.log(body);
        const user = new User({ ...body, password: hashedPassword });
        await user.save();

        return res.send({ data: user, success: true, })
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
})

app.get("/api/get-users", authMiddleware, async (req, res) => {
    try {
        const users = await User.find();

        return res.send({ data: users, success: true, })
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
})

// signin (Login)
app.post("/api/user/signin", async (req, res) => {
    try {
      // 400 -> Bad Request
      // 404 -> Not Found
        const { email, password } = req.body;
        if(!email || !password){
          return res.status(400).send({ message: 'Please provide Email & Password' })
        }
// time taken -> 10 sec
        
        const user = await User.findOne({ email: email })  // 20 sec
        if(!user){
          return res.send({ message: 'User Not Found' })
        }
        const posts = await Post.findOne({ author: user._id, }) // 20 sec
        console.log("**************************************");
        console.log(user);
        console.log("**************************************");

        return res.send({ test: 'anscjanc', user })
        
        // const user = await User.findOne({ email: email })
        // const hashedPassword = await bcrypt.hash(password, 10);
        // const isValid = await bcrypt.hash(password, user.password);

        // if(isValid){
        //   const token = jwt.sign({ 
        //     _id: user._id, email: user.email 
        //   }, "user-server-nodejs")
        //   return res.send({ data: user, success: true, token: token })
        // }
        // else {
        //   return res.status(400).send({ 
        //     data: null, 
        //     success: false, 
        //     message: 'Invalid Credential' 
        //   })
        // }
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
})

app.post("/api/create-post", authMiddleware, async (req, res) => {
    try {
      // req.originalUrl
        const userId = req.userId;
        const { content } = req.body;
        const post = new Post({ content, createdAt: new Date(), author: userId });
        await post.save();

        return res.send({ data: post, success: true, })
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
})

app.get("/api/get-post", authMiddleware, async (req, res) => {
    try {
        // const posts = await Post.find(); // author id  
        const posts = await Post.find().populate("author"); // author data 

        return res.send({ data: posts, success: true, })
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
})


const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server in Running or http://localhost:${PORT}`);
})
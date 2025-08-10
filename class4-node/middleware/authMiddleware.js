const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next){
    const authorization = req.headers.authorization;

    if(!authorization){
        return res.status(400).send({ success: false, message: "No Token Provided" })
    }

    const token = authorization.replace("Bearer ", "")
    console.log(token);

    try {
        const decode = jwt.verify(token, "user-server-nodejs")
        console.log(decode);
        req.userId = decode._id
    } catch (error) {
        console.log(error);
        return res.status(401).send({ success: false, message: 'Token expired', })
    }

    

    next()
    // return res.send("ahscacsacjsa")
}

module.exports = authMiddleware;
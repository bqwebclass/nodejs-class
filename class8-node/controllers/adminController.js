const User = require("../models/User")


const getAllUserForAdmin = async (req, res) => {
    try {
        // console.log(req.userId, req.userRole);
        
        const users = await User.find({ });
        return res.send({ data: users, })
    } catch (error) {
        return res.status(500).send({ message: error.message, })
    }
}

module.exports = {
    getAllUserForAdmin,
}
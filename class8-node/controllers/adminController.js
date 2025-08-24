const User = require("../models/User")


const getAllUserForAdmin = async (req, res) => {
    try {
        // console.log(req.userId, req.userRole);

        const users = await User.find({});
        return res.send({ data: users, })
    } catch (error) {
        return res.status(500).send({ message: error.message, })
    }
}

const getAvgAgeOfStd = async (req, res) => {
    try {
        // console.log(req.userId, req.userRole);

        const result = await User.aggregate([
            { $match: { role: "student", } }, 
            { 
                $group: { 
                    _id: "$classId", 
                    avgSuccess: { 
                        $avg: { 
                            $subtract: [new Date(), "$dob"] 
                        } 
                    } 
                } 
            }]);
        return res.send({ data: result, })
    } catch (error) {
        return res.status(500).send({ message: error.message, })
    }
}



module.exports = {
    getAllUserForAdmin,
    getAvgAgeOfStd,
}
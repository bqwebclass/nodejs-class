const bcrypt = require("bcryptjs");
const User = require("../models/User");


const signUpController = async (req, res) => {
    try {
        const body = req.body;
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const user = new User({ ...body, password: hashedPassword });
        await user.save();

        return res.send({ data: user, success: true, })
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
}


module.exports = {
    signUpController,
}
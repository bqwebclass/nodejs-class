const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");


const signUpController = async (req, res) => {
    try {
        const body = req.body;
        const hashedPassword = await bcrypt.hash(body.password, 10);
        const dob = req.body.dob ? new Date(req.body.dob) : null;
        const user = new User({ ...body, password: hashedPassword });
        await user.save();

        return res.send({ data: user, success: true, })
    } catch (error) {
        return res.status(500).send({ data: null, success: false, error })
    }
}

const signInController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).send({ message: "Please provide Email & Password." })
        }

        const user = await User.findOne({ email: email })  // 20 sec
        if (!user) {
            return res.send({ message: 'User Not Found' })
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.send({ message: 'Invalid Credential' })
        }
        const token = jwt.sign({
            _id: user._id, email: user.email, role: user.role,
        }, process.env.JWT_SECRET, { expiresIn: '1d' })

        return res.send({ data: { ...user._doc, token, } })
    } catch (error) {

    }
}

module.exports = {
    signUpController,
    signInController,
}
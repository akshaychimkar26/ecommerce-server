const User = require("../models/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const dotenv = require("dotenv")
dotenv.config()
const signup = async (req, res) => {
    try {
        const { name, email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) {
            return res.status(400).json({
                error: "Email is already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const newUser = new User({ name, email, password: hashedPassword })
        const savedUser = await newUser.save()
        const token = jwt.sign({ userId: savedUser._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.status(201).json({ user: savedUser, token })
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        const passwordMatch = await bcrypt.compare(password, user.password)
        if (!passwordMatch) {
            return res.status(401).json({
                error: "Invalid credentials"
            })
        }

        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: "1h" })
        res.json({ user, token })
    }
    catch (error) {
        res.status(400).json({
            error: error.message
        })
    }
}

const Singleuser = async (req, res) => {

    // Endpoint to get details of a single user
    try {
        const userId = req.params.userId;

        // Use Mongoose to find the user by ID
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = { signup, login, Singleuser }
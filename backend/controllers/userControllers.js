import userModel from "../models/userModels.js";
import jwt from "jsonwebtoken"
import validator from "validator";
import bcrypt from "bcrypt"

const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" })
        }
        const user = await userModel.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: "Invalid email or password" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const token = createToken(user._id);
        res.status(200).json({ token })
    } catch (error) {
        console.error(error)
        res.status(200).json({ message: error })
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (!name) {
            return res.status(400).json({ message: "Name is required" });
        }
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }
        const exists = await userModel.findOne({ email });
        if (exists) {
            return res.json({ success: false, message: "User already exists" });
        }
        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Please enter a valid email" });
        }
        if (password.length < 8) {
            return res.status(400).json({ message: "Password must be at least 8 characters" });
        }
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new userModel({
            name,
            email,
            password: hashedPassword,
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.status(200).json({ success: true, data: token });
    } catch (error) {
        console.error(error)
        res.status(501).json({ success: false, message: error });
    }
}

export { loginUser, registerUser };
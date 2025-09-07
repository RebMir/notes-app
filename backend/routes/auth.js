import express from 'express';
import User from '../models/User.js';
import { protect } from '../middleware/auth.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
    const {username, email, password, confirmPassword} = req.body;

    try {
        if (!username || !email || !password || !confirmPassword) {
            return res.status(400).json({message: "Please fill all the fields!"});
        }

        // Check if passwords match
        if (password !== confirmPassword) {
            return res.status(400).json({message: "Passwords do not match"});
        }

        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(400).json({message: "User already exists"});
        }

        // Create user (confirmPassword is not saved to database)
        const user = await User.create({ username, email, password });
        const token = generateToken(user._id);
        
        res.status(201).json({
            id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({message: "Server Error"});
    }
});

// Login
router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }
        const token = generateToken(user._id);
        res.json({
            id: user._id,
            username: user.username,
            email: user.email,
            token,
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({message: "Server error"});
    }
});

// Me
router.get("/me", protect, async (req, res) => {
    res.status(200).json(req.user);
});

// Generate JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "30d" });
};

export default router;
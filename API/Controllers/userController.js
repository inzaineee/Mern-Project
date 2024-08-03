const User = require('../Models/userModel');

// User Login
const loginUser = async (req, res) => {
    res.json({ message: 'Login route' });
}

// User Signup

const signupUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.signup(email, password);
        res.status(200).json({ user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

module.exports = {signupUser, loginUser};
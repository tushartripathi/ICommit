const User = require('../models/userModel');

// Example: Get all users
const getUsers = async (req, res) => {
    try {
        console.log("in here");
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { getUsers };

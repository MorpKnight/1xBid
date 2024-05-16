const userServices = require('../services/User.services')

exports.signin = async (req, res) => {
    try {
        const user = await userServices.signin(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.signup = async (req, res) => {
    try {
        const user = await userServices.signup(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.signout = async (req, res) => {
    try {
        const user = await userServices.signout(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

exports.getProfile = async (req, res) => {
    try {
        const user = await userServices.getProfile(req.body);
        res.status(200).json(user);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
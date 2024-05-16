const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/User.controllers');

router.post('/signin', userControllers.signin);
router.post('/signup', userControllers.signup);
router.post('/signout', userControllers.signout);
router.get('/getprofile', userControllers.getProfile);

module.exports = router;
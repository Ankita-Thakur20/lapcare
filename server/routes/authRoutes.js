const express = require('express');
const { register, login, privateController } = require('../controllers/authController');
const protect = require('../middlewares/authMiddleware');
const router = express.Router()


//Access : public
//route : /api/user
//method : post
//desc : Register new user
router.post("/register",register)

//Access : public
//route : /api/user/login
//method : post
//desc : Login existing user
router.post("/login",login)

//can be accessed by giving token only because its "protect"
router.post("/private",protect, privateController)

module.exports = router;
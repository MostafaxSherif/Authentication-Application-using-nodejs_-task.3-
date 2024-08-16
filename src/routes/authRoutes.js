// src/routes/authRoutes.js
const express = require('express');
const { register, login } = require('../controllers/authController');
const auth = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/protected', auth, (req, res) => {
  res.json({ message: 'Welcome to the protected route' });
});

module.exports = router;

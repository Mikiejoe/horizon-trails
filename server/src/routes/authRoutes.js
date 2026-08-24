const express = require('express');
const router = express.Router();

const { register, login, getMe } = require('../controllers/authController');
const { protect, authorize } = require('../middleware/auth');
const {
  validateRegister,
  validateLogin,
} = require('../middleware/validators/authValidator');

router.post('/login', validateLogin, login);

// Protected registration (Admin creating new staff accounts)
router.post(
  '/register',
  protect,
  authorize('ADMIN'),
  validateRegister,
  register
);
router.get('/me', protect, getMe);

module.exports = router;
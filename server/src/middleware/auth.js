const jwt = require('jsonwebtoken');
const User = require('../models/User');

/**
 * Middleware to verify JWT token attached in headers or cookies
 */
exports.protect = async (req, res, next) => {
  let token;

  // 1. Extract token from Authorization header (Bearer <token>)
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  // 2. Fallback to check signed/unsigned cookies if available
  if (!token && req.cookies && req.cookies.token) {
    token = req.cookies.token;
  }

  // 3. Reject if no token is present
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route. Token missing.',
    });
  }

  try {
    // 4. Verify token payload
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 5. Fetch user from DB without password hash and attach to request object
    const currentUser = await User.findById(decoded.id).select('-passwordHash');

    if (!currentUser) {
      return res.status(401).json({
        success: false,
        message: 'The user belonging to this token no longer exists.',
      });
    }

    req.user = currentUser;
    next();
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized. Invalid or expired token.',
    });
  }
};

/**
 * Middleware to restrict access based on user roles
 * @param  {...string} roles - Permitted roles (e.g., 'ADMIN', 'STAFF')
 */
exports.authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role '${req.user ? req.user.role : 'GUEST'}' is not authorized to access this route.`,
      });
    }
    next();
  };
};
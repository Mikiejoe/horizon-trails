/**
 * Global Error Handling Middleware
 */
const errorHandler = (err, req, res, next) => {
  let error = { ...err };
  error.message = err.message;

  // Log full error stack for debugging in development
  if (process.env.NODE_ENV === 'development') {
    console.error('[Error Details]:', err);
  }

  // 1. Mongoose Bad ObjectId (CastError)
  if (err.name === 'CastError') {
    const message = `Resource not found with ID: ${err.value}`;
    error = { statusCode: 404, message };
  }

  // 2. Mongoose Duplicate Key Error (Code 11000)
  if (err.code === 11000) {
    const field = Object.keys(err.keyValue)[0];
    const value = err.keyValue[field];
    const message = `Duplicate field value entered: '${value}' for field '${field}'. Please use another value.`;
    error = { statusCode: 400, message };
  }

  // 3. Mongoose Validation Error (ValidationError)
  if (err.name === 'ValidationError') {
    const messages = Object.values(err.errors).map((val) => val.message);
    const message = `Invalid input data: ${messages.join('. ')}`;
    error = { statusCode: 400, message };
  }

  // 4. JWT Authentication Errors
  if (err.name === 'JsonWebTokenError') {
    error = { statusCode: 401, message: 'Invalid token. Authorization denied.' };
  }

  if (err.name === 'TokenExpiredError') {
    error = { statusCode: 401, message: 'Token has expired. Please log in again.' };
  }

  // 5. Multer File Upload Errors
  if (err.code === 'LIMIT_FILE_SIZE') {
    error = { statusCode: 400, message: 'File size exceeds maximum allowed limit of 5MB.' };
  }

  // Final JSON Response
  res.status(error.statusCode || 500).json({
    success: false,
    message: error.message || 'Server Error. Something went wrong on our end.',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
  });
};

module.exports = errorHandler;
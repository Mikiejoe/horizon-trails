const mongoose = require('mongoose');

/**
 * Connects to MongoDB with connection pooling and event listeners
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Connection Pooling Options
      maxPoolSize: 10,       // Maintain up to 10 active socket connections
      minPoolSize: 2,        // Keep at least 2 socket connections open
      serverSelectionTimeoutMS: 5000, // Timeout after 5s instead of hanging indefinitely
      socketTimeoutMS: 45000, // Close sockets after 45s of inactivity
    });

    console.log(`[MongoDB] Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[MongoDB Error] Initial connection failed: ${error.message}`);
    process.exit(1);
  }
};

// ==========================================
// Mongoose Connection Event Listeners
// ==========================================

// Fired when the connection drops
mongoose.connection.on('disconnected', () => {
  console.warn('[MongoDB Warning] Lost connection to database.');
});

// Fired when the connection successfully reconnects
mongoose.connection.on('reconnected', () => {
  console.log('[MongoDB] Reconnected to database.');
});

// Log runtime errors post-initial connection
mongoose.connection.on('error', (err) => {
  console.error(`[MongoDB Error] Runtime error: ${err.message}`);
});

module.exports = { connectDB };
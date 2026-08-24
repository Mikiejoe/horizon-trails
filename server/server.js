require('dotenv').config();

const app = require('./src/app');
const { connectDB } = require('./src/config/db');

const PORT = process.env.PORT || 5000;

// Connect to Database first, then launch the HTTP listener
const startServer = async () => {
  try {
    await connectDB();
    
    const server = app.listen(PORT, () => {
      console.log(`[Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
    });

    // Graceful Shutdown Handling
    const handleExit = (signal) => {
      console.log(`[Server] ${signal} received. Closing HTTP server...`);
      server.close(() => {
        console.log('[Server] HTTP server closed. Exiting process.');
        process.exit(0);
      });
    };

    process.on('SIGTERM', () => handleExit('SIGTERM'));
    process.on('SIGINT', () => handleExit('SIGINT'));

  } catch (error) {
    console.error(`[Server Error] Failed to start server: ${error.message}`);
    process.exit(1);
  }
};

startServer();
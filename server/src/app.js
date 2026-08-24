const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

// Import routes
const authRoutes = require('./routes/authRoutes');
const tourRoutes = require('./routes/tourRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const quotationRoutes = require('./routes/quotationRoutes');

// Import middleware
const errorHandler = require('./middleware/errorHandler');

const app = express();

// 1. Global Security & Body Parsing Middlewares
app.use(helmet());
app.use(
  cors({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2. Health Check Endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', timestamp: new Date() });
});

// 3. API Route Mounting
app.use('/api/auth', authRoutes);
app.use('/api/tours', tourRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/quotations', quotationRoutes);

// 4. Handle 404 Route Hits
app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Resource not found' });
});

// 5. Global Error Handling Middleware
app.use(errorHandler);

module.exports = app;
const express = require('express');
const router = express.Router();

const {
  createBooking,
  getAllBookings,
  getBookingByIdentifier,
  updateBookingStatus,
} = require('../controllers/bookingController');
const { validateCreateBooking, validateUpdateBookingStatus } = require('../middleware/validators/bookingValidator');

const { protect, authorize } = require('../middleware/auth');

// Public endpoints
router.post('/', validateCreateBooking, createBooking);
router.get('/lookup/:identifier', getBookingByIdentifier);

// Admin/Staff endpoints
router.use(protect);
router.use(authorize('ADMIN', 'STAFF'));

router.get('/', getAllBookings);
router.get('/:identifier', getBookingByIdentifier);
router.patch('/:id/status', protect, authorize('ADMIN', 'STAFF'), validateUpdateBookingStatus, updateBookingStatus);

module.exports = router;
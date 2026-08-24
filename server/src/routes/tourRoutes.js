const express = require('express');
const router = express.Router();

const {
  getAllTours,
  getTourBySlug,
  createTour,
  updateTour,
  deleteTour,
  addItineraryDay,
} = require('../controllers/tourController');

const {
  validateCreateTour,
  validateItineraryDay,
} = require('../middleware/validators/tourValidators');
const { protect, authorize } = require('../middleware/auth');

// Public Routes
router.get('/', getAllTours);
router.get('/:slug', getTourBySlug);

// Protected Admin/Staff Routes
router.use(protect);
router.use(authorize('ADMIN', 'STAFF'));

router.post('/', validateCreateTour, createTour);
router.put('/:id', updateTour);
router.delete('/:id', deleteTour);
router.post('/:id/itinerary', validateItineraryDay, addItineraryDay);

module.exports = router;
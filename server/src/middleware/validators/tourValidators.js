const { body, param, query } = require('express-validator');
const validate = require('../validate');

exports.validateCreateTour = [
  body('destinationId')
    .notEmpty()
    .withMessage('Destination ID is required')
    .isMongoId()
    .withMessage('Invalid Mongo ID for destination'),

  body('title')
    .trim()
    .notEmpty()
    .withMessage('Tour title is required')
    .isLength({ min: 3 })
    .withMessage('Title must be at least 3 characters'),

  body('summary')
    .trim()
    .notEmpty()
    .withMessage('Summary is required'),

  body('description')
    .trim()
    .notEmpty()
    .withMessage('Description is required'),

  body('pricePerPerson')
    .notEmpty()
    .withMessage('Price per person is required')
    .isFloat({ min: 0 })
    .withMessage('Price must be a positive number'),

  body('durationDays')
    .notEmpty()
    .withMessage('Duration in days is required')
    .isInt({ min: 1 })
    .withMessage('Duration must be at least 1 day'),

  body('maxGroupSize')
    .notEmpty()
    .withMessage('Max group size is required')
    .isInt({ min: 1 })
    .withMessage('Group size must be at least 1'),

  body('featuredImage')
    .notEmpty()
    .withMessage('Featured image URL is required')
    .isURL()
    .withMessage('Featured image must be a valid URL'),

  body('galleryImages')
    .optional()
    .isArray()
    .withMessage('Gallery images must be an array of URLs'),

  validate,
];

exports.validateItineraryDay = [
  param('id')
    .isMongoId()
    .withMessage('Invalid Tour ID'),

  body('dayNumber')
    .notEmpty()
    .withMessage('Day number is required')
    .isInt({ min: 1 })
    .withMessage('Day number must be 1 or greater'),

  body('title')
    .trim()
    .notEmpty()
    .withMessage('Itinerary day title is required'),

  body('description')
    .trim()
    .notEmpty()
    .withMessage('Itinerary description is required'),

  body('meals')
    .optional()
    .isArray()
    .withMessage('Meals must be an array of strings (e.g. ["Breakfast", "Lunch"])'),

  validate,
];
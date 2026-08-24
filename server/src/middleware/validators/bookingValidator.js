const { body, param } = require('express-validator');
const validate = require('../validate');

exports.validateCreateBooking = [
  body('tourId')
    .notEmpty()
    .withMessage('Tour ID is required')
    .isMongoId()
    .withMessage('Invalid Mongo ID for tour'),

  body('customerName')
    .trim()
    .notEmpty()
    .withMessage('Customer name is required'),

  body('customerEmail')
    .trim()
    .notEmpty()
    .withMessage('Email is required')
    .isEmail()
    .withMessage('Please enter a valid email address')
    .normalizeEmail(),

  body('customerPhone')
    .trim()
    .notEmpty()
    .withMessage('Phone number is required'),

  body('travelDate')
    .notEmpty()
    .withMessage('Travel date is required')
    .isISO8601()
    .toDate()
    .withMessage('Please provide a valid ISO date'),

  body('guestsCount')
    .notEmpty()
    .withMessage('Guests count is required')
    .isInt({ min: 1 })
    .withMessage('Guests count must be at least 1'),

  validate,
];

exports.validateUpdateBookingStatus = [
  param('id')
    .isMongoId()
    .withMessage('Invalid Booking ID'),

  body('status')
    .notEmpty()
    .withMessage('Status is required')
    .isIn(['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'])
    .withMessage('Invalid status. Allowed values: PENDING, CONFIRMED, CANCELLED, COMPLETED'),

  validate,
];
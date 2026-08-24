const Booking = require('../models/Booking');
const Tour = require('../models/Tour');

/**
 * Helper to generate unique booking reference (e.g., SAV-202608-X89K)
 */
const generateBookingNumber = () => {
  const prefix = 'SAV';
  const dateStr = new Date().toISOString().slice(0, 7).replace('-', '');
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${prefix}-${dateStr}-${random}`;
};

/**
 * @desc    Create new booking
 * @route   POST /api/bookings
 * @access  Public
 */
exports.createBooking = async (req, res, next) => {
  try {
    const { tourId, customerName, customerEmail, customerPhone, travelDate, guestsCount } = req.body;

    // 1. Verify tour existence and retrieve price
    const tour = await Tour.findById(tourId);
    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour package not found' });
    }

    // 2. Validate guest count capacity
    if (guestsCount > tour.maxGroupSize) {
      return res.status(400).json({
        success: false,
        message: `Guest count exceeds maximum allowed group size of ${tour.maxGroupSize} for this tour.`,
      });
    }

    // 3. Calculate total amount
    const totalAmount = tour.pricePerPerson * Number(guestsCount);

    // 4. Generate unique booking reference
    const bookingNumber = generateBookingNumber();

    // 5. Create booking record
    const booking = await Booking.create({
      bookingNumber,
      tour: tourId,
      customerName,
      customerEmail,
      customerPhone,
      travelDate,
      guestsCount: Number(guestsCount),
      totalAmount,
      status: 'PENDING',
    });

    const populatedBooking = await booking.populate('tour', 'title slug durationDays pricePerPerson');

    res.status(201).json({
      success: true,
      message: 'Booking created successfully',
      data: populatedBooking,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all bookings (Filterable by status)
 * @route   GET /api/bookings
 * @access  Private/Admin
 */
exports.getAllBookings = async (req, res, next) => {
  try {
    const { status, page = 1, limit = 10 } = req.query;

    const query = {};
    if (status) query.status = status.toUpperCase();

    const skip = (Number(page) - 1) * Number(limit);

    const bookings = await Booking.find(query)
      .populate('tour', 'title slug pricePerPerson durationDays')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Booking.countDocuments(query);

    res.status(200).json({
      success: true,
      count: bookings.length,
      total,
      pages: Math.ceil(total / Number(limit)),
      data: bookings,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get booking details by ID or reference number
 * @route   GET /api/bookings/:identifier
 * @access  Public / Private
 */
exports.getBookingByIdentifier = async (req, res, next) => {
  try {
    const { identifier } = req.params;

    // Check if identifier is a MongoDB ObjectId or booking reference
    const query = identifier.match(/^[0-9a-fA-F]{24}$/)
      ? { _id: identifier }
      : { bookingNumber: identifier.toUpperCase() };

    const booking = await Booking.findOne(query).populate('tour', 'title slug durationDays pricePerPerson featuredImage');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking record not found' });
    }

    res.status(200).json({ success: true, data: booking });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update booking status (PENDING, CONFIRMED, CANCELLED, COMPLETED)
 * @route   PATCH /api/bookings/:id/status
 * @access  Private/Admin
 */
exports.updateBookingStatus = async (req, res, next) => {
  try {
    const { status } = req.body;
    const validStatuses = ['PENDING', 'CONFIRMED', 'CANCELLED', 'COMPLETED'];

    if (!status || !validStatuses.includes(status.toUpperCase())) {
      return res.status(400).json({
        success: false,
        message: `Invalid status. Must be one of: ${validStatuses.join(', ')}`,
      });
    }

    const booking = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: status.toUpperCase() },
      { new: true, runValidators: true }
    ).populate('tour', 'title slug');

    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking record not found' });
    }

    res.status(200).json({
      success: true,
      message: `Booking status updated to ${booking.status}`,
      data: booking,
    });
  } catch (error) {
    next(error);
  }
};
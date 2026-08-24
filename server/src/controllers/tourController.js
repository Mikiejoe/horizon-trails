const Tour = require('../models/Tour');
const Destination = require('../models/Destination');

// Helper to slugify titles
const slugify = (text) => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')     // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove non-word chars
    .replace(/\-\-+/g, '-');  // Replace multiple - with single -
};

/**
 * @desc    Get all tours with optional filtering & pagination
 * @route   GET /api/tours
 * @access  Public
 */
exports.getAllTours = async (req, res, next) => {
  try {
    const { destination, minPrice, maxPrice, duration, isFeatured, page = 1, limit = 10 } = req.query;

    const query = {};

    if (destination) query.destination = destination;
    if (isFeatured) query.isFeatured = isFeatured === 'true';
    if (duration) query.durationDays = { $lte: Number(duration) };

    if (minPrice || maxPrice) {
      query.pricePerPerson = {};
      if (minPrice) query.pricePerPerson.$gte = Number(minPrice);
      if (maxPrice) query.pricePerPerson.$lte = Number(maxPrice);
    }

    const skip = (Number(page) - 1) * Number(limit);

    const tours = await Tour.find(query)
      .populate('destination', 'name slug coverImage')
      .skip(skip)
      .limit(Number(limit))
      .sort({ createdAt: -1 });

    const total = await Tour.countDocuments(query);

    res.status(200).json({
      success: true,
      count: tours.length,
      total,
      pages: Math.ceil(total / Number(limit)),
      data: tours,
    });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get single tour by slug
 * @route   GET /api/tours/:slug
 * @access  Public
 */
exports.getTourBySlug = async (req, res, next) => {
  try {
    const tour = await Tour.findOne({ slug: req.params.slug }).populate(
      'destination',
      'name slug description coverImage'
    );

    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour package not found' });
    }

    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Create new tour
 * @route   POST /api/tours
 * @access  Private/Admin
 */
exports.createTour = async (req, res, next) => {
  try {
    const { destinationId, title, summary, description, pricePerPerson, durationDays, maxGroupSize, featuredImage, galleryImages, isFeatured, itineraries } = req.body;

    // Verify destination exists
    const destinationExists = await Destination.findById(destinationId);
    if (!destinationExists) {
      return res.status(400).json({ success: false, message: 'Invalid destination ID provided' });
    }

    const slug = slugify(title);

    const newTour = await Tour.create({
      destination: destinationId,
      title,
      slug,
      summary,
      description,
      pricePerPerson,
      durationDays,
      maxGroupSize,
      featuredImage,
      galleryImages: galleryImages || [],
      isFeatured: isFeatured || false,
      itineraries: itineraries || [],
    });

    res.status(201).json({ success: true, data: newTour });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update tour details
 * @route   PUT /api/tours/:id
 * @access  Private/Admin
 */
exports.updateTour = async (req, res, next) => {
  try {
    if (req.body.title) {
      req.body.slug = slugify(req.body.title);
    }

    const tour = await Tour.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour package not found' });
    }

    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Delete a tour
 * @route   DELETE /api/tours/:id
 * @access  Private/Admin
 */
exports.deleteTour = async (req, res, next) => {
  try {
    const tour = await Tour.findByIdAndDelete(req.params.id);

    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour package not found' });
    }

    res.status(200).json({ success: true, message: 'Tour package removed successfully' });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Add or replace itinerary day item
 * @route   POST /api/tours/:id/itinerary
 * @access  Private/Admin
 */
exports.addItineraryDay = async (req, res, next) => {
  try {
    const { dayNumber, title, description, meals } = req.body;
    const tour = await Tour.findById(req.params.id);

    if (!tour) {
      return res.status(404).json({ success: false, message: 'Tour package not found' });
    }

    // Check if day already exists
    const dayIndex = tour.itineraries.findIndex((item) => item.dayNumber === Number(dayNumber));

    if (dayIndex > -1) {
      // Update existing day
      tour.itineraries[dayIndex] = { dayNumber, title, description, meals };
    } else {
      // Append new day and sort by day number
      tour.itineraries.push({ dayNumber, title, description, meals });
      tour.itineraries.sort((a, b) => a.dayNumber - b.dayNumber);
    }

    await tour.save();

    res.status(200).json({ success: true, data: tour });
  } catch (error) {
    next(error);
  }
};
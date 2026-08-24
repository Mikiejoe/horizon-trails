const mongoose = require('mongoose');

const itineraryDaySchema = new mongoose.Schema({
  dayNumber: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Itinerary title is required'],
  },
  description: {
    type: String,
    required: [true, 'Itinerary description is required'],
  },
  meals: [{ type: String }], // e.g. ["Breakfast", "Lunch", "Dinner"]
});

const tourSchema = new mongoose.Schema(
  {
    destination: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Destination',
      required: [true, 'Destination reference is required'],
    },
    title: {
      type: String,
      required: [true, 'Tour title is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    summary: {
      type: String,
      required: [true, 'Short summary is required'],
    },
    description: {
      type: String,
      required: [true, 'Detailed description is required'],
    },
    pricePerPerson: {
      type: Number,
      required: [true, 'Price per person is required'],
      min: 0,
    },
    durationDays: {
      type: Number,
      required: [true, 'Duration in days is required'],
      min: 1,
    },
    maxGroupSize: {
      type: Number,
      required: [true, 'Max group size is required'],
      min: 1,
    },
    featuredImage: {
      type: String,
      required: [true, 'Featured image is required'],
    },
    galleryImages: [{ type: String }],
    isFeatured: {
      type: Boolean,
      default: false,
    },
    itineraries: [itineraryDaySchema], // Embedded daily itinerary sub-documents
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Tour', tourSchema);
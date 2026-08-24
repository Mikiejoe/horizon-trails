const mongoose = require('mongoose');

const destinationSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Destination name is required'],
      trim: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },
    description: {
      type: String,
      required: [true, 'Description is required'],
    },
    coverImage: {
      type: String,
      required: [true, 'Cover image URL is required'],
    },
    gallery: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Destination', destinationSchema);
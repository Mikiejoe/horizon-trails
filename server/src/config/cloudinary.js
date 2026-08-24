const cloudinary = require('cloudinary').v2;

// Configure Cloudinary credentials from environment
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Uploads a buffer directly to Cloudinary using a stream
 * @param {Buffer} fileBuffer - File buffer from Multer
 * @param {String} folder - Cloudinary target folder path
 * @returns {Promise<Object>} Upload result object containing secure_url and public_id
 */
const uploadToCloudinary = (fileBuffer, folder = 'savanna_tours') => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder,
        resource_type: 'image',
        transformation: [
          { width: 1200, height: 800, crop: 'limit' }, // Auto-resize large images
          { quality: 'auto', fetch_format: 'auto' },   // Auto-optimize format & compression
        ],
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result);
      }
    );

    uploadStream.end(fileBuffer);
  });
};

/**
 * Deletes an image from Cloudinary by public ID
 * @param {String} publicId - Cloudinary asset public ID
 */
const deleteFromCloudinary = async (publicId) => {
  try {
    return await cloudinary.uploader.destroy(publicId);
  } catch (error) {
    console.error('Cloudinary deletion error:', error);
    throw error;
  }
};

module.exports = {
  cloudinary,
  uploadToCloudinary,
  deleteFromCloudinary,
};
const express = require('express');
const router = express.Router();

const {
  createQuotation,
  getAllQuotations,
  downloadQuotationPDF,
  updatePaymentStatus,
} = require('../controllers/quotationController');

const { protect, authorize } = require('../middleware/auth');

// Public endpoint to view or print generated PDF invoices
router.get('/:id/pdf', downloadQuotationPDF);

// Admin / Staff protected endpoints
router.use(protect);
router.use(authorize('ADMIN', 'STAFF'));

router.post('/', createQuotation);
router.get('/', getAllQuotations);
router.patch('/:id/status', updatePaymentStatus);

module.exports = router;
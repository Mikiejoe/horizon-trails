const Quotation = require('../models/Quotation');
const Booking = require('../models/Booking');
const { generateQuotationPDF } = require('../utils/pdfGenerator');

/**
 * Helper to generate Invoice numbers (e.g., INV-2026-9281)
 */
const generateInvoiceNumber = () => {
  const year = new Date().getFullYear();
  const random = Math.floor(1000 + Math.random() * 9000);
  return `INV-${year}-${random}`;
};

/**
 * @desc    Generate a quotation/invoice for a booking
 * @route   POST /api/quotations
 * @access  Private/Admin
 */
exports.createQuotation = async (req, res, next) => {
  try {
    const { bookingId, dueDateDays = 7 } = req.body;

    // 1. Verify booking existence
    const booking = await Booking.findById(bookingId);
    if (!booking) {
      return res.status(404).json({ success: false, message: 'Booking not found' });
    }

    // 2. Check if quotation already exists for this booking
    const existingQuotation = await Quotation.findOne({ booking: bookingId });
    if (existingQuotation) {
      return res.status(400).json({
        success: false,
        message: 'Quotation already exists for this booking',
        data: existingQuotation,
      });
    }

    // 3. Tax and total calculations
    const subtotal = booking.totalAmount;
    const taxRate = (Number(process.env.TAX_RATE_PERCENTAGE) || 16) / 100;
    const tax = subtotal * taxRate;
    const total = subtotal + tax;

    // 4. Set Due Date
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + Number(dueDateDays));

    const quotation = await Quotation.create({
      invoiceNumber: generateInvoiceNumber(),
      booking: bookingId,
      createdBy: req.user.id,
      subtotal,
      tax,
      total,
      dueDate,
    });

    const populatedQuotation = await quotation.populate([
      { path: 'booking', populate: { path: 'tour', select: 'title pricePerPerson' } },
      { path: 'createdBy', select: 'name email' },
    ]);

    res.status(201).json({ success: true, data: populatedQuotation });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Get all quotations
 * @route   GET /api/quotations
 * @access  Private/Admin
 */
exports.getAllQuotations = async (req, res, next) => {
  try {
    const quotations = await Quotation.find()
      .populate({ path: 'booking', select: 'bookingNumber customerName customerEmail totalAmount' })
      .populate('createdBy', 'name')
      .sort({ createdAt: -1 });

    res.status(200).json({ success: true, count: quotations.length, data: quotations });
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Stream / Download PDF Invoice
 * @route   GET /api/quotations/:id/pdf
 * @access  Public / Private
 */
exports.downloadQuotationPDF = async (req, res, next) => {
  try {
    const quotation = await Quotation.findById(req.params.id).populate({
      path: 'booking',
      populate: { path: 'tour', select: 'title pricePerPerson' },
    });

    if (!quotation) {
      return res.status(404).json({ success: false, message: 'Quotation invoice not found' });
    }

    // Generate PDF Buffer
    const pdfBuffer = await generateQuotationPDF(quotation);

    // Set Response Headers for Inline Streaming / Download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader(
      'Content-Disposition',
      `inline; filename=${quotation.invoiceNumber}.pdf`
    );

    res.status(200).send(pdfBuffer);
  } catch (error) {
    next(error);
  }
};

/**
 * @desc    Update payment status
 * @route   PATCH /api/quotations/:id/status
 * @access  Private/Admin
 */
exports.updatePaymentStatus = async (req, res, next) => {
  try {
    const { paymentStatus } = req.body;
    const validStatuses = ['UNPAID', 'PARTIAL', 'PAID', 'REFUNDED'];

    if (!paymentStatus || !validStatuses.includes(paymentStatus.toUpperCase())) {
      return res.status(400).json({ success: false, message: 'Invalid payment status value' });
    }

    const quotation = await Quotation.findByIdAndUpdate(
      req.params.id,
      { paymentStatus: paymentStatus.toUpperCase() },
      { new: true, runValidators: true }
    );

    if (!quotation) {
      return res.status(404).json({ success: false, message: 'Quotation invoice not found' });
    }

    res.status(200).json({ success: true, data: quotation });
  } catch (error) {
    next(error);
  }
};
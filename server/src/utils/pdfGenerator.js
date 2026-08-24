const PDFDocument = require('pdfkit');

/**
 * Generates an Invoice / Quotation PDF as a Buffer
 * @param {Object} quotation - Quotation Mongoose document (populated with booking and user)
 * @returns {Promise<Buffer>}
 */
exports.generateQuotationPDF = (quotation) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument({ margin: 50, size: 'A4' });
    const buffers = [];

    doc.on('data', (chunk) => buffers.push(chunk));
    doc.on('end', () => resolve(Buffer.concat(buffers)));
    doc.on('error', (err) => reject(err));

    const companyName = process.env.COMPANY_NAME || 'Savanna Path Safaris';
    const companyEmail = process.env.COMPANY_EMAIL || 'info@savannapath.com';
    const companyPhone = process.env.COMPANY_PHONE || '+254 700 000000';

    const { invoiceNumber, booking, subtotal, tax, total, paymentStatus, dueDate, createdAt } = quotation;

    // --- Header / Branding ---
    doc
      .fillColor('#1E3A2B') // Acacia Green
      .fontSize(22)
      .font('Helvetica-Bold')
      .text(companyName, 50, 45)
      .fontSize(9)
      .font('Helvetica')
      .fillColor('#555555')
      .text(`${companyEmail} | ${companyPhone}`, 50, 70)
      .text('Nakuru, Kenya', 50, 82);

    // Document Title
    doc
      .fillColor('#C85A32') // Terracotta
      .fontSize(20)
      .font('Helvetica-Bold')
      .text('INVOICE / QUOTE', 380, 45, { align: 'right' })
      .fontSize(10)
      .font('Helvetica')
      .fillColor('#333333')
      .text(`#: ${invoiceNumber}`, 380, 70, { align: 'right' })
      .text(`Date: ${new Date(createdAt).toLocaleDateString()}`, 380, 84, { align: 'right' })
      .text(`Due Date: ${new Date(dueDate).toLocaleDateString()}`, 380, 98, { align: 'right' });

    doc.moveDown();
    doc.strokeColor('#E0E0E0').lineWidth(1).moveTo(50, 120).lineTo(545, 120).stroke();

    // --- Customer & Booking Details ---
    doc
      .fontSize(11)
      .font('Helvetica-Bold')
      .fillColor('#1E3A2B')
      .text('Billed To:', 50, 135)
      .font('Helvetica')
      .fillColor('#333333')
      .text(`Name: ${booking.customerName}`, 50, 150)
      .text(`Email: ${booking.customerEmail}`, 50, 164)
      .text(`Phone: ${booking.customerPhone}`, 50, 178);

    doc
      .font('Helvetica-Bold')
      .fillColor('#1E3A2B')
      .text('Booking Summary:', 320, 135)
      .font('Helvetica')
      .fillColor('#333333')
      .text(`Booking Ref: ${booking.bookingNumber}`, 320, 150)
      .text(`Travel Date: ${new Date(booking.travelDate).toLocaleDateString()}`, 320, 164)
      .text(`Guests: ${booking.guestsCount} Person(s)`, 320, 178)
      .text(`Status: ${paymentStatus}`, 320, 192);

    // --- Table Headers ---
    const tableTop = 230;
    doc
      .rect(50, tableTop, 495, 22)
      .fill('#F7F4EE'); // Sand Card background

    doc
      .fillColor('#1E3A2B')
      .font('Helvetica-Bold')
      .fontSize(10)
      .text('Description / Tour Package', 60, tableTop + 6)
      .text('Guests', 330, tableTop + 6)
      .text('Rate/Person', 400, tableTop + 6)
      .text('Amount (USD)', 470, tableTop + 6, { align: 'right' });

    // --- Table Line Item ---
    const itemTop = tableTop + 30;
    const tourTitle = booking.tour ? booking.tour.title : 'Custom Safari Package';
    const ratePerPerson = (subtotal / booking.guestsCount).toFixed(2);

    doc
      .font('Helvetica')
      .fillColor('#333333')
      .text(tourTitle, 60, itemTop)
      .text(`${booking.guestsCount}`, 330, itemTop)
      .text(`$${ratePerPerson}`, 400, itemTop)
      .text(`$${subtotal.toFixed(2)}`, 470, itemTop, { align: 'right' });

    doc.strokeColor('#EEEEEE').lineWidth(1).moveTo(50, itemTop + 20).lineTo(545, itemTop + 20).stroke();

    // --- Totals Section ---
    const totalsTop = itemTop + 40;
    doc
      .font('Helvetica')
      .text('Subtotal:', 350, totalsTop, { align: 'right' })
      .text(`$${subtotal.toFixed(2)}`, 470, totalsTop, { align: 'right' })
      .text(`Tax (${process.env.TAX_RATE_PERCENTAGE || 16}%):`, 350, totalsTop + 16, { align: 'right' })
      .text(`$${tax.toFixed(2)}`, 470, totalsTop + 16, { align: 'right' });

    doc
      .font('Helvetica-Bold')
      .fontSize(12)
      .fillColor('#C85A32')
      .text('Total Amount Due:', 320, totalsTop + 36, { align: 'right' })
      .text(`$${total.toFixed(2)}`, 470, totalsTop + 36, { align: 'right' });

    // --- Footer Note ---
    doc
      .fontSize(9)
      .font('Helvetica-Oblique')
      .fillColor('#777777')
      .text('Thank you for choosing Savanna Path Safaris. Please settle the invoice prior to departure.', 50, 720, {
        align: 'center',
        width: 495,
      });

    doc.end();
  });
};
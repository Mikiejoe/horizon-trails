const { Resend } = require('resend');

// Initialize Resend client with API Key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = process.env.EMAIL_FROM || 'Savanna Path Safaris <noreply@savannapath.com>';

/**
 * Send Booking Confirmation Email to Customer
 * @param {Object} booking - Populated Booking object
 */
exports.sendBookingConfirmationEmail = async (booking) => {
  const { customerName, customerEmail, bookingNumber, travelDate, guestsCount, totalAmount, tour } = booking;
  const tourTitle = tour ? tour.title : 'Safari Tour';

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #1E3A2B; margin-top: 0;">Booking Received!</h2>
      <p>Dear ${customerName},</p>
      <p>Thank you for booking your adventure with <strong>Savanna Path Safaris</strong>. We have received your booking request and are processing the details.</p>
      
      <div style="background-color: #F7F4EE; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <h3 style="color: #C85A32; margin-top: 0;">Booking Details</h3>
        <p style="margin: 5px 0;"><strong>Reference:</strong> ${bookingNumber}</p>
        <p style="margin: 5px 0;"><strong>Tour:</strong> ${tourTitle}</p>
        <p style="margin: 5px 0;"><strong>Travel Date:</strong> ${new Date(travelDate).toDateString()}</p>
        <p style="margin: 5px 0;"><strong>Guests:</strong> ${guestsCount}</p>
        <p style="margin: 5px 0;"><strong>Total Estimated Cost:</strong> $${totalAmount.toFixed(2)} USD</p>
      </div>

      <p>Our team will reach out shortly to finalize payment details and provide your travel itinerary.</p>
      <p style="margin-top: 30px; font-size: 12px; color: #777777;">If you have any questions, please reply directly to this email or contact support.</p>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: [customerEmail],
      subject: `Booking Confirmation - Ref: ${bookingNumber}`,
      html: htmlContent,
    });

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send booking confirmation email:', error);
    return { success: false, error: error.message };
  }
};

/**
 * Send Quotation / Invoice PDF Attachment to Customer
 * @param {Object} quotation - Populated Quotation object
 * @param {Buffer} pdfBuffer - Generated PDF Buffer
 */
exports.sendQuotationEmail = async (quotation, pdfBuffer) => {
  const { invoiceNumber, booking, total, dueDate } = quotation;
  const { customerName, customerEmail } = booking;

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333333; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
      <h2 style="color: #1E3A2B; margin-top: 0;">Your Safari Quotation / Invoice</h2>
      <p>Dear ${customerName},</p>
      <p>Please find attached your official quotation invoice <strong>#${invoiceNumber}</strong> for your upcoming safari tour.</p>

      <div style="background-color: #F7F4EE; padding: 15px; border-radius: 6px; margin: 20px 0;">
        <p style="margin: 5px 0;"><strong>Invoice Number:</strong> ${invoiceNumber}</p>
        <p style="margin: 5px 0;"><strong>Total Amount:</strong> $${total.toFixed(2)} USD</p>
        <p style="margin: 5px 0;"><strong>Payment Due Date:</strong> ${new Date(dueDate).toDateString()}</p>
      </div>

      <p>Kindly review the attached PDF document for complete payment instruction details.</p>
      <p style="margin-top: 30px; font-size: 12px; color: #777777;">Savanna Path Safaris Team</p>
    </div>
  `;

  try {
    const data = await resend.emails.send({
      from: FROM_EMAIL,
      to: [customerEmail],
      subject: `Invoice #${invoiceNumber} - Savanna Path Safaris`,
      html: htmlContent,
      attachments: [
        {
          filename: `${invoiceNumber}.pdf`,
          content: pdfBuffer,
        },
      ],
    });

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send invoice PDF email:', error);
    return { success: false, error: error.message };
  }
};
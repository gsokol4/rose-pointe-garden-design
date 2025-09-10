const nodemailer = require("nodemailer");

// Email configuration
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT || 587,
    secure: process.env.SMTP_PORT == 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
};

const RECIPIENT_EMAILS = [
  'gsokol4@gmail.com',
  'gabriel.f.sokol@gmail.com'
];

const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
const MIN_PHONE_LENGTH = 7;

export async function POST(request) {
  try {
    // Check content type
    const contentType = request.headers.get('content-type');
    if (!contentType || !contentType.includes('application/json')) {
      return Response.json({ error: 'Content-Type must be application/json' }, { status: 400 });
    }

    let body;
    try {
      body = await request.json();
    } catch {
      return Response.json({ error: 'Invalid JSON format' }, { status: 400 });
    }

    const { phoneNumber, message } = body;

    if (!phoneNumber) {
      return Response.json({ error: 'Phone number is required' }, { status: 400 });
    }

    const cleanedPhoneNumber = phoneNumber.replace(/[\s\-\(\)]/g, '');
    const digitsOnly = cleanedPhoneNumber.replace(/[\+]/g, '');

    if (digitsOnly.length < MIN_PHONE_LENGTH) {
      return Response.json(
        { error: `Phone number must be at least ${MIN_PHONE_LENGTH} digits long` },
        { status: 400 }
      );
    }

    if (!phoneRegex.test(cleanedPhoneNumber)) {
      return Response.json({ error: 'Invalid phone number format' }, { status: 400 });
    }

    const transporter = createTransporter();

    try {
      await transporter.verify();
    } catch (error) {
      console.error('SMTP configuration error:', error);
      return Response.json({ error: 'Email service configuration error' }, { status: 500 });
    }

    const emailSubject = 'New Contact Form Submission - Phone Number';
    const emailHTML = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">New Contact Form Submission</h2>
        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="color: #555; margin-top: 0;">Contact Details:</h3>
          <p><strong>Phone Number:</strong> ${phoneNumber}</p>
          ${message ? `<p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>` : ''}
          <p><strong>Submitted:</strong> ${new Date().toLocaleString()}</p>
        </div>
      </div>
    `;

    const emailText = `
New Contact Form Submission

Phone Number: ${phoneNumber}
${message ? `Message: ${message}\n` : ''}
Submitted: ${new Date().toLocaleString()}
    `;

    const emailPromises = RECIPIENT_EMAILS.map(email => 
      transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: email,
        subject: emailSubject,
        text: emailText,
        html: emailHTML,
      })
    );

    await Promise.all(emailPromises);

    return Response.json(
      { 
        success: true, 
        message: 'Contact form submitted successfully',
        emailsSent: RECIPIENT_EMAILS.length
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return Response.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET() {
  return Response.json({ error: 'Method not allowed' }, { status: 405 });
}
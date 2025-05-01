// app/api/contact/route.js

import { NextResponse } from 'next/server';
import twilio from 'twilio';

// Initialize Twilio client with your credentials
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request) {
  try {
    // Parse the JSON request body
    const { name, email, phone, message } = await request.json();

    // Validate the required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { message: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create the notification message
    const notificationMessage = `
        New contact form submission:
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Message: ${message}
    `;

    // Send the SMS via Twilio
    await twilioClient.messages.create({
      body: notificationMessage,
      from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio phone number
      to: process.env.NOTIFICATION_PHONE_NUMBER // The number to notify
    });

    // Return success response
    return NextResponse.json(
      { message: 'Notification sent successfully, well maybe' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending notification:', error);
    return NextResponse.json(
      { message: 'Failed to send notification', error: error.message },
      { status: 500 }
    );
  }
}
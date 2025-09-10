import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, location, message } = body;

    // Basic validation
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Here you would typically send the email using a service like:
    // - SendGrid
    // - Nodemailer
    // - Resend
    // - EmailJS
    // For now, we'll just log it and return success

    console.log('Contact form submission:', {
      firstName,
      lastName,
      email,
      location,
      message,
      timestamp: new Date().toISOString(),
    });

    // You can integrate with your preferred email service here
    // Example with a simple email service:
    /*
    await sendEmail({
      to: 'your-email@example.com',
      subject: `New Contact Form Submission from ${firstName} ${lastName}`,
      body: `
        Name: ${firstName} ${lastName}
        Email: ${email}
        Location: ${location}
        Message: ${message}
      `
    });
    */

    return NextResponse.json(
      { message: 'Thank you for your message! I will get back to you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}
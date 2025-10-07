import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

interface AppointmentData {
  fullName: string;
  email: string;
  phone: string;
  department: string;
  appointmentDate: string;
  appointmentTime: string;
  smsConsent: boolean;
}

export async function POST(request: NextRequest) {
  try {
    const body: AppointmentData = await request.json();
    const {
      fullName,
      email,
      phone,
      department,
      appointmentDate,
      appointmentTime,
      smsConsent,
    } = body;

    // Validate required fields
    if (
      !fullName ||
      !email ||
      !phone ||
      !department ||
      !appointmentDate ||
      !appointmentTime
    ) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email configuration
    if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error('SMTP credentials not configured');
      return NextResponse.json(
        {
          error: 'Email service not configured. Please contact administrator.',
        },
        { status: 500 }
      );
    }

    // Create transporter (using environment variables for security)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Test the connection (optional but recommended)
    try {
      await transporter.verify();
    } catch (verifyError) {
      console.error('SMTP verification failed:', verifyError);
      return NextResponse.json(
        {
          error:
            'Email service temporarily unavailable. Please try again later or call us directly.',
        },
        { status: 500 }
      );
    }

    // Format department name
    const departmentNames: { [key: string]: string } = {
      'family-medicine': 'Family Medicine',
      'primary-care': 'Primary Care',
      'family-planning': 'Family Planning',
      'weight-loss': 'Weight Loss',
      'health-checkups': 'Health Checkups',
    };

    const departmentName = departmentNames[department] || department;

    // Format date and time
    const formattedDate = new Date(appointmentDate).toLocaleDateString(
      'en-US',
      {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    );

    const formattedTime = new Date(
      `1970-01-01T${appointmentTime}`
    ).toLocaleTimeString('en-US', {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    });

    // Email to clinic/admin
    const clinicEmailOptions = {
      from: process.env.SMTP_USER,
      to: process.env.CLINIC_EMAIL || process.env.SMTP_USER, // Use CLINIC_EMAIL or fallback to SMTP_USER
      subject: 'New Appointment Request - MD Primary Care',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background-color: #14b8a6; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0;">MD Primary Care</h1>
            <h2 style="margin: 10px 0 0 0; font-weight: normal;">New Appointment Request</h2>
          </div>
          
          <div style="padding: 20px; background-color: #f9f9f9;">
            <h3 style="color: #14b8a6; margin-top: 0;">Patient Information</h3>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Full Name:</td>
                <td style="padding: 8px 0; color: #666;">${fullName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Email:</td>
                <td style="padding: 8px 0; color: #666;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Phone:</td>
                <td style="padding: 8px 0; color: #666;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Department:</td>
                <td style="padding: 8px 0; color: #666;">${departmentName}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Preferred Date:</td>
                <td style="padding: 8px 0; color: #666;">${formattedDate}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">Preferred Time:</td>
                <td style="padding: 8px 0; color: #666;">${formattedTime}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #333;">SMS Consent:</td>
                <td style="padding: 8px 0; color: #666;">${smsConsent ? 'Yes' : 'No'}</td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 20px; text-align: center; background-color: #f0f0f0; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; color: #666;">Please contact the patient to confirm the appointment.</p>
            <p style="margin: 5px 0 0 0; font-size: 12px; color: #999;">This email was sent from MD Primary Care website appointment form.</p>
          </div>
        </div>
      `,
    };

    // Confirmation email to patient
    const patientEmailOptions = {
      from: process.env.SMTP_USER,
      to: email,
      subject: 'Appointment Request Confirmation - MD Primary Care',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <div style="background-color: #14b8a6; color: white; padding: 20px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="margin: 0;">MD Primary Care</h1>
            <h2 style="margin: 10px 0 0 0; font-weight: normal;">Appointment Request Received</h2>
          </div>
          
          <div style="padding: 20px;">
            <p style="color: #333; font-size: 16px;">Dear ${fullName},</p>
            <p style="color: #666; line-height: 1.6;">
              Thank you for requesting an appointment with MD Primary Care. We have received your appointment request and our team will contact you shortly to confirm your appointment.
            </p>
            
            <div style="background-color: #f0f9ff; padding: 15px; border-radius: 8px; margin: 20px 0;">
              <h3 style="color: #14b8a6; margin-top: 0;">Your Appointment Details:</h3>
              <ul style="color: #666; line-height: 1.8;">
                <li><strong>Department:</strong> ${departmentName}</li>
                <li><strong>Preferred Date:</strong> ${formattedDate}</li>
                <li><strong>Preferred Time:</strong> ${formattedTime}</li>
              </ul>
            </div>
            
            <p style="color: #666; line-height: 1.6;">
              Our office hours are Monday - Friday: 8 AM – 5 PM. If you need to make changes to your appointment or have any questions, please call us at <strong>772-302-3767</strong>.
            </p>
            
            <div style="background-color: #fef3cd; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #fbbf24;">
              <p style="margin: 0; color: #92400e; font-size: 14px;">
                <strong>Please Note:</strong> This is not a confirmed appointment. Our team will contact you to confirm the appointment time and provide any additional instructions.
              </p>
            </div>
          </div>
          
          <div style="padding: 20px; text-align: center; background-color: #f0f0f0; border-radius: 0 0 10px 10px;">
            <p style="margin: 0; color: #666; font-weight: bold;">MD Primary Care</p>
            <p style="margin: 5px 0; color: #666;">2215 Nebraska avenue #2B, Fort Pierce FL 34950</p>
            <p style="margin: 5px 0; color: #666;">Phone: 772-302-3767</p>
          </div>
        </div>
      `,
    };

    // Send emails with better error handling
    try {
      await transporter.sendMail(clinicEmailOptions);
      await transporter.sendMail(patientEmailOptions);
    } catch (emailError) {
      console.error('Error sending emails:', emailError);
      return NextResponse.json(
        {
          error:
            'Failed to send confirmation emails. Please call us directly to confirm your appointment.',
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Appointment request sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing appointment request:', error);
    return NextResponse.json(
      {
        error:
          'Failed to process appointment request. Please try again or call us directly.',
      },
      { status: 500 }
    );
  }
}

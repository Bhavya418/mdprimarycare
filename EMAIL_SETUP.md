# Email Setup Guide for MD Primary Care

## Overview

The appointment booking system sends automated emails to both the clinic and the patient when an appointment is requested.

## Email Configuration

### 1. Environment Variables Setup

Copy `.env.example` to `.env.local` and configure the following variables:

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-clinic-email@gmail.com
SMTP_PASS=your-app-password
CLINIC_EMAIL=admin@mdprimarycare.com
```

### 2. Gmail Setup (Recommended)

#### Step 1: Enable 2-Factor Authentication

1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable "2-Step Verification"

#### Step 2: Generate App Password

1. In Google Account settings, go to "Security"
2. Under "2-Step Verification", click "App passwords"
3. Select "Mail" and your device
4. Copy the 16-character password
5. Use this password in `SMTP_PASS` (not your regular Gmail password)

#### Step 3: Update Environment Variables

```bash
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=clinic@gmail.com
SMTP_PASS=abcd efgh ijkl mnop  # Your 16-character app password
CLINIC_EMAIL=admin@mdprimarycare.com
```

### 3. Alternative Email Providers

#### SendGrid

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

#### Mailgun

```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
```

#### Microsoft Outlook

```bash
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-outlook-password
```

## Email Templates

The system sends two types of emails:

### 1. Clinic Notification Email

- **To**: `CLINIC_EMAIL` environment variable
- **Subject**: "New Appointment Request - MD Primary Care"
- **Content**: Patient details and appointment information

### 2. Patient Confirmation Email

- **To**: Patient's email address
- **Subject**: "Appointment Request Confirmation - MD Primary Care"
- **Content**: Confirmation message and next steps

## API Endpoint

**URL**: `/api/appointment`  
**Method**: `POST`  
**Content-Type**: `application/json`

### Request Body

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "department": "primary-care",
  "appointmentDate": "2025-01-15",
  "appointmentTime": "10:30",
  "smsConsent": true
}
```

### Response

```json
{
  "message": "Appointment request sent successfully!"
}
```

## Troubleshooting

### Common Issues

1. **"Authentication failed"**
   - Make sure you're using an app password for Gmail, not your regular password
   - Verify 2-factor authentication is enabled

2. **"Connection refused"**
   - Check SMTP_HOST and SMTP_PORT values
   - Ensure your hosting provider allows SMTP connections

3. **Emails not received**
   - Check spam/junk folders
   - Verify CLINIC_EMAIL is correct
   - Test with a different email address

### Testing the Setup

You can test the email functionality by:

1. Filling out the appointment form on the website
2. Checking both the clinic email and patient email for messages
3. Verifying the email content and formatting

## Security Notes

- Never commit `.env.local` to version control
- Use strong, unique passwords for email accounts
- Consider using dedicated email services like SendGrid for production
- Regularly rotate email passwords and API keys

## Production Recommendations

For production environments:

1. Use a dedicated email service (SendGrid, Mailgun, etc.)
2. Set up proper DNS records (SPF, DKIM, DMARC)
3. Monitor email delivery rates
4. Implement email rate limiting
5. Add email logging for debugging

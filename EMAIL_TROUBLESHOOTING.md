# Email Troubleshooting Guide

## Common Email Issues and Solutions

### 1. SMTP Authentication Failed

**Error**: "Invalid login" or "Authentication failed"

**Solutions**:

```bash
# For Gmail users:
# 1. Enable 2-factor authentication
# 2. Generate app password (not regular password)
# 3. Use app password in SMTP_PASS

SMTP_USER=your-email@gmail.com
SMTP_PASS=abcd efgh ijkl mnop  # 16-character app password
```

### 2. Connection Timeout/Refused

**Error**: "Connection timeout" or "ECONNREFUSED"

**Solutions**:

- Check firewall settings
- Verify SMTP host and port
- Try different ports: 587 (TLS) or 465 (SSL)

```bash
# Alternative configurations:
# Standard TLS
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587

# SSL (secure=true)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
```

### 3. Environment Variables Not Set

**Error**: "Email service not configured"

**Solution**: Create `.env.local` file:

```bash
# Copy from .env.example
cp .env.example .env.local

# Edit with your credentials
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-clinic-email@gmail.com
SMTP_PASS=your-app-password
CLINIC_EMAIL=admin@mdprimarycare.com
```

### 4. Emails Going to Spam

**Solutions**:

- Set up SPF record: `v=spf1 include:_spf.google.com ~all`
- Use a professional email address
- Include proper sender information
- Avoid spam trigger words

### 5. Rate Limiting

**Error**: "Too many requests" or rate limit exceeded

**Solutions**:

- Use dedicated email service (SendGrid, Mailgun)
- Implement email queuing
- Add delays between emails

### 6. SSL/TLS Certificate Issues

**Error**: "Certificate verification failed"

**Solutions**:

```javascript
// In transporter config (NOT recommended for production)
tls: {
  rejectUnauthorized: false;
}

// Better solution: Use proper certificates or dedicated service
```

## Testing Email Configuration

### 1. Test SMTP Connection

```bash
# Use telnet to test connection
telnet smtp.gmail.com 587
```

### 2. Verify Environment Variables

```javascript
// Add to your API route for debugging
console.log('SMTP Config:', {
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  user: process.env.SMTP_USER ? '***configured***' : 'NOT SET',
  pass: process.env.SMTP_PASS ? '***configured***' : 'NOT SET',
});
```

### 3. Test Email Sending

```bash
# Send test request
curl -X POST http://localhost:3000/api/appointment \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "phone": "123-456-7890",
    "department": "primary-care",
    "appointmentDate": "2025-01-15",
    "appointmentTime": "10:30",
    "smsConsent": true
  }'
```

## Recommended Email Services for Production

### 1. SendGrid (Recommended)

```bash
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=your-sendgrid-api-key
```

### 2. Mailgun

```bash
SMTP_HOST=smtp.mailgun.org
SMTP_PORT=587
SMTP_USER=postmaster@your-domain.mailgun.org
SMTP_PASS=your-mailgun-password
```

### 3. AWS SES

```bash
SMTP_HOST=email-smtp.us-east-1.amazonaws.com
SMTP_PORT=587
SMTP_USER=your-ses-smtp-username
SMTP_PASS=your-ses-smtp-password
```

## Error Codes Reference

- **421**: Service not available (temporary)
- **450**: Mailbox temporarily unavailable
- **451**: Local error, try again later
- **452**: Insufficient storage
- **500**: Command not recognized
- **501**: Invalid parameters
- **502**: Command not implemented
- **503**: Bad command sequence
- **504**: Command parameter not implemented
- **535**: Authentication failed
- **550**: Mailbox unavailable (permanent)
- **551**: User not local
- **552**: Exceeded storage allocation
- **553**: Invalid mailbox name
- **554**: Transaction failed

## Development vs Production

### Development

```bash
# Use Gmail for testing
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-personal-email@gmail.com
SMTP_PASS=your-app-password
```

### Production

```bash
# Use professional email service
SMTP_HOST=smtp.sendgrid.net
SMTP_PORT=587
SMTP_USER=apikey
SMTP_PASS=SG.xxxxxxxxxxxxxxxxxxxxx
CLINIC_EMAIL=appointments@mdprimarycare.com
```

## Security Best Practices

1. **Never commit credentials** to version control
2. **Use environment variables** for all sensitive data
3. **Enable 2FA** on email accounts
4. **Use app passwords** instead of account passwords
5. **Regularly rotate** email credentials
6. **Monitor email logs** for suspicious activity
7. **Set up proper DNS records** (SPF, DKIM, DMARC)
8. **Use TLS encryption** for email transmission

## Need Help?

If you continue to experience issues:

1. Check the browser console for detailed error messages
2. Check server logs for SMTP errors
3. Verify your email provider's documentation
4. Test with a simple email client first
5. Contact your hosting provider about SMTP restrictions

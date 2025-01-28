const Enquiry = require("../models/Enquiry");
const nodemailer = require("nodemailer");

exports.createEnquiry = async (req, res) => {
  const { name, phone, email, service, message } = req.body;

  try {
    const newEnquiry = new Enquiry({
      name,
      phone,
      email,
      service,
      message,
    });

    await newEnquiry.save();

    // Send email to user
    const userTransporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // Use true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Enquiry Received - Go For It Hypnotherapy",
      html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f4f4f4;
                }
                .email-container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  border-radius: 8px;
                  overflow: hidden;
                }
                .email-header {
                  background-color: #4CAF50;
                  color: #ffffff;
                  text-align: center;
                  padding: 20px;
                }
                .email-header h1 {
                  margin: 0;
                  font-size: 24px;
                }
                .email-body {
                  padding: 20px;
                }
                .email-body h3 {
                  color: #333333;
                  margin-bottom: 10px;
                }
                .email-body p {
                  color: #555555;
                  line-height: 1.6;
                  margin: 10px 0;
                }
                .highlight {
                  color: #4CAF50;
                  font-weight: bold;
                }
                .email-footer {
                  text-align: center;
                  background-color: #f4f4f4;
                  padding: 10px;
                  font-size: 12px;
                  color: #888888;
                }
                .button {
                  display: inline-block;
                  margin: 20px 0;
                  padding: 10px 20px;
                  color: #ffffff;
                  background-color: #4CAF50;
                  border: none;
                  border-radius: 4px;
                  text-decoration: none;
                  font-weight: bold;
                }
                .button:hover {
                  background-color: #45a049;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="email-header">
                  <h1>Enquiry Received</h1>
                </div>
                <div class="email-body">
                  <h3>Dear <span class="highlight">${name}</span>,</h3>
                  <p>Thank you for your enquiry about our <span class="highlight">${service}</span> service. We are excited to assist you and will get back to you shortly.</p>
                  <p><strong>Your Message:</strong></p>
                  <p>"${message}"</p>
                  <p>Feel free to explore more about our services</p>
                  <a href="${
                    process.env.FRONT_URL
                  }/services" class="button">View Other Services</a>
                  <p>Best regards,</p>
                  <p><strong>Go For It Hypnotherapy</strong></p>
                </div>
                <div class="email-footer">
                  <p>&copy; ${new Date().getFullYear()} Go For It Hypnotherapy. All Rights Reserved.</p>
                  <p>123 Moonee Ponds Road, Victoria, Australia</p>
                </div>
              </div>
            </body>
          </html>
        `,
    };

    await userTransporter.sendMail(userMailOptions);

    // Send email to admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: "New Enquiry Received - Go For It Hypnotherapy",
      html: `
          <!DOCTYPE html>
          <html>
            <head>
              <style>
                body {
                  font-family: Arial, sans-serif;
                  margin: 0;
                  padding: 0;
                  background-color: #f9f9f9;
                }
                .email-container {
                  max-width: 600px;
                  margin: 20px auto;
                  background-color: #ffffff;
                  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                  border-radius: 8px;
                  overflow: hidden;
                }
                .email-header {
                  background-color: #ff9800;
                  color: #ffffff;
                  text-align: center;
                  padding: 20px;
                }
                .email-header h1 {
                  margin: 0;
                  font-size: 24px;
                }
                .email-body {
                  padding: 20px;
                }
                .email-body h3 {
                  color: #333333;
                  margin-bottom: 20px;
                }
                .email-body p {
                  color: #555555;
                  line-height: 1.6;
                  margin: 10px 0;
                }
                .info {
                  background-color: #f4f4f4;
                  padding: 10px;
                  border-left: 4px solid #ff9800;
                  margin-bottom: 10px;
                }
                .info strong {
                  color: #333333;
                }
                .email-footer {
                  text-align: center;
                  background-color: #f4f4f4;
                  padding: 10px;
                  font-size: 12px;
                  color: #888888;
                }
              </style>
            </head>
            <body>
              <div class="email-container">
                <div class="email-header">
                  <h1>New Enquiry Received</h1>
                </div>
                <div class="email-body">
                  <h3>New enquiry details:</h3>
                  <div class="info">
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Phone:</strong> ${phone}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Service:</strong> ${service}</p>
                  </div>
                  <p><strong>Message:</strong></p>
                  <p>${message}</p>
                  <p>Please follow up with the client at the earliest convenience.</p>
                </div>
                <div class="email-footer">
                  <p>&copy; ${new Date().getFullYear()} Go For It Hypnotherapy. All Rights Reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
    };

    await userTransporter.sendMail(adminMailOptions);

    res.status(201).json({ message: "Enquiry submitted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

exports.getEnquiries = async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.status(200).json(enquiries);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

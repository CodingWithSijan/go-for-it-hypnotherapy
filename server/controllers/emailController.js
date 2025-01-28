const nodemailer = require("nodemailer");

const sendEmail = async (req, res) => {
  const { email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp-mail.outlook.com',
      port: 587,
      secure: false, // Use true for port 465
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Message from Go For It Hypnotherapy",
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
                  <h1>Message From Go For it Hypnotherapy</h1>
                </div>
                <div class="email-body">
                  <h3>Message from Stella</h3>
                  <div class="info">
                    <p><strong>Message: </strong> ${message}</p>
                  </div>
                </div>
                <div class="email-footer">
                  <p>&copy; ${new Date().getFullYear()} Go For It Hypnotherapy. All Rights Reserved.</p>
                </div>
              </div>
            </body>
          </html>
        `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};

module.exports = { sendEmail };

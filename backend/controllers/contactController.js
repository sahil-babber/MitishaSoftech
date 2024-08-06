const db = require('../models/contact.model.js');
require('dotenv').config();
const nodemailer = require('nodemailer');

// Create a transporter object using SMTP transport
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,  // e.g., 'your-email@gmail.com'
        pass: process.env.EMAIL_PASS   // e.g., 'your-email-password'
    }
});

module.exports = {
    getingContactData: async (req, res) => {
        try {
            // Save contact data to the database
            const contactData = await db.create({
                contactname: req.body.contactname,
                // Add more fields as needed
            });

            // Prepare email options
            const mailOptions = {
                from: '"Mitisha Softech" <cashu853@gmail.com>',
                to: 'cashu853@gmail.com',
                subject: 'New Contact Form Submission',
                text: `Contact Name: ${req.body.contactname}`
                // Add more details as needed
            };

            // Send email
            await transporter.sendMail(mailOptions);

            res.status(200).json({
                success: true,
                status: 200,
                message: "Contact Data submitted Successfully",
                body: contactData
            });
        } catch (error) {
            console.error('Error sending email:', error);
            res.status(500).json({
                success: false,
                error: error.message
            });
        }
    }
}

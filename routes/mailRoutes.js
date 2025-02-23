const express = require('express');
const nodemailer = require('nodemailer');
const router = express.Router();

router.post('/', async (req, res) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: { user: process.env.MAIL_USER, pass: process.env.MAIL_PASS }
  });

  await transporter.sendMail({ from: process.env.MAIL_USER, to: req.body.email, subject: "Hello!", text: "Test Email" });
  res.send('Email Sent!');
});

module.exports = router;

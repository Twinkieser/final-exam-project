const express = require('express');
const QRCode = require('qrcode');
const router = express.Router();

router.get('/', async (req, res) => {
  const { text } = req.query;
  const qrImage = await QRCode.toDataURL(text);
  res.render('qr', { qrImage });
});

module.exports = router;

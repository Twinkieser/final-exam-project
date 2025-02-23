const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('bmi'));

router.post('/', (req, res) => {
  const { weight, height } = req.body;
  const bmi = (weight / (height * height)).toFixed(2);
  res.render('bmi', { bmi });
});

module.exports = router;

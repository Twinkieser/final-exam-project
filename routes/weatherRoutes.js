const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/', async (req, res) => {
  const { city } = req.query;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`;
  const { data } = await axios.get(url);
  res.render('weather', { weather: data });
});

module.exports = router;

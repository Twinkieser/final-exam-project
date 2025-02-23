const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride('_method'));
app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));


app.use('/', require('./routes/authRoutes'));
app.use('/weather', require('./routes/weatherRoutes'));
app.use('/qr', require('./routes/qrRoutes'));
app.use('/bmi', require('./routes/bmiRoutes'));
app.use('/todo', require('./routes/todoRoutes'));
app.use('/mail', require('./routes/mailRoutes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

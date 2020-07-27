require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const apiRoutes = require('./routes/apiRoutes.js');

const app = express();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true })
  .then(() => console.log('connected to mongo database!'));

app.use(express.static(path.join(__dirname, 'public'))); // NEW MIDDLEWARE!!!

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json({ limit: '10mb' }));

app.use(morgan('dev'));

app.use(cors({
  origin: 'http://localhost:3000',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.use('/api', apiRoutes);

app.use((req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});

app.listen(process.env.PORT, () => console.log('server running on PORT 5000'));

module.exports = app;

const express = require('express');
const Events = require('../../models/Events');
const Tasks = require('../../models/Tasks');

const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  res.render('public/index');
});

module.exports = router;

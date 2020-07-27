const express = require('express');
const {
  index,
  beersRoute,
  randomBeerRoute,
  beerDetailRoute,
  searchBeersRoute,
} = require('../controlers/beersRoutes.controler');

const router = express();

router.get('/', index);

router.get('/beers', beersRoute);

router.get('/random-beer', randomBeerRoute);

router.get('/beer', beerDetailRoute);

router.post('/beers', searchBeersRoute);

module.exports = router;

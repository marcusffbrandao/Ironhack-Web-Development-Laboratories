const PunkAPIWrapper = require('punkapi-javascript-wrapper');

const punkAPI = new PunkAPIWrapper();

const index = (req, res) => {
  res.render('index');
};

const beersRoute = async (req, res) => {
  try {
    const allBeers = await punkAPI.getBeers();
    res.render('beers-view', { allBeers });
  } catch (err) {
    console.log(err);
  }
};

const randomBeerRoute = async (req, res) => {
  try {
    const randomBeer = await punkAPI.getRandom();
    res.render('random-beer-view', randomBeer[0]);
  } catch (err) {
    console.log(err);
  }
};

const beerDetailRoute = async (req, res) => {
  const { id } = req.query;
  try {
    const oneBeer = await punkAPI.getBeer(id);
    res.render('random-beer-view', oneBeer[0]);
  } catch (err) {
    console.log(err);
  }
};

const searchBeersRoute = async (req, res) => {
  const { name } = req.body;
  try {
    const allBeers = await punkAPI.getBeers();
    const filteredBeers = allBeers.filter(beer => beer.name.toLowerCase().includes(name.toLowerCase()));
    res.render('beers-view', { allBeers: filteredBeers });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  index,
  beersRoute,
  randomBeerRoute,
  beerDetailRoute,
  searchBeersRoute,
};

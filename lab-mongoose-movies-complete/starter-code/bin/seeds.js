const mongoose = require('mongoose');
const Celebrity = require('../models/Celebrity');
const Movie = require('../models/Movie');

mongoose.connect('mongodb://localhost/mongoose-movies');
const celebrities = [
  {
    name: "Lady Gaga",
    occupation: "singer",
    catchPhrase: "Don't be a drag, just be a queen!" 
  },
  {
    name: "Steve Jobs",
    occupation: "other",
    catchPhrase: "I am the best!"
  },
  {
    name: "Marcus",
    occupation: "none",
    catchPhrase: "I hate apple!"
  },
];

// Celebrity.create(celebrities, (error) => {
//   if(error) {throw(error)}
//   console.log(`created ${celebrities.length} celebrities`);
//   mongoose.connection.close();
// });


const movies = [
  {
    title: "Lion King",
    genre: "kids",
    plot: "Uma String!" 
  },
  {
    title: "Steve ",
    genre: "other",
    plot: "best!"
  },
  {
    title: "Narcos",
    genre: "none",
    plot: "apple!"
  },
];

Movie.create(movies, (error) => {
    if(error) {throw(error)}
    console.log(`created ${movies.length} movies`);
    mongoose.connection.close();
  });
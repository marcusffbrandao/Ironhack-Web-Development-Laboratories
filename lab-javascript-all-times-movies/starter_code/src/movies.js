/* eslint no-restricted-globals: 'off' */


var movies = [
    {
      title: 'The Shawshank Redemption',
      year: '1994',
      director: 'Frank Darabont',
      duration: '2h 22min',
      genre: ['Crime', 'Drama'],
      rate: '9.3'
    },
    {
      title: 'The Godfather',
      year: '1972',
      director: 'Francis Ford Coppola',
      duration: '2h',
      genre: ['Crime', 'Drama'],
      rate: '9.2'
    },
    {
      title: 'The Godfather: Part II',
      year: '1974',
      director: 'Francis Ford Coppola',
      duration: '22min',
      genre: ['Crime', 'Drama'],
      rate: '9.0'
    },
    {
      title: 'The Dark Knight',
      year: '2008',
      director: 'Christopher Nolan',
      duration: '2h 32min',
      genre: ['Action', 'Crime', 'Drama', 'Thriller'],
      rate: '9.0'
    },
    {
      title: '12 Angry Men',
      year: '1957',
      director: 'Sidney Lumet',
      duration: '1h 36min',
      genre: ['Crime', 'Drama'],
      rate: '8.9'
    }]


    // let copyMovies = JSON.parse(JSON.stringify(movies));




// Turn duration of the movies from hours to minutes

function turnHoursToMinutes(yourMovieList) {
    let movies = JSON.parse(JSON.stringify(yourMovieList));
    movies = movies.map((movie) => {
    movie.duration = movie.duration.split("h");
    if (movie.duration[0].includes('min')) {
        movie.duration.unshift(0);
    } else if (movie.duration[1].includes('min') === false) {
        movie.duration[1] = 0;
    };
    let hoursInNumbers = parseInt(movie.duration[0], 10);
    movie.duration[0] = hoursInNumbers;
    let minutesInNumbers = parseInt(movie.duration[1], 10);
    movie.duration[1] = minutesInNumbers;
    // movie.duration = [(movie.duration[0] * 60) + movie.duration[1]];
    // movie.duration = parseInt(movie.duration);
    movie.duration = parseInt([(movie.duration[0] * 60) + movie.duration[1]]);
    return movie;
    }   
    );
    return movies;
}

// // Get the average of all rates with 2 decimals 

function ratesAverage(yourMovieList) {
    
   let averageRate = yourMovieList.reduce((totalRate, movie) => {
      return totalRate + parseFloat(movie.rate);
      },
      0);
      return averageRate / yourMovieList.length; 

  };
   
// Get the average of Drama Movies

let dramaMoviesRate = (yourMovieList) => {
  let dramaMovies = yourMovieList.filter(movie => movie.genre.includes('Drama'));
  if (dramaMovies.length === 0) {
    return undefined;
  };
  let averageDramaRate = dramaMovies.reduce((totalDramaRate, movie) => {
    if (movie.rate == '') {
      return totalDramaRate;
    } else {
      return totalDramaRate + parseFloat(movie.rate);
    }
  },
  0);
  return parseFloat((averageDramaRate /  dramaMovies.length).toFixed(2));
};

// Order by time duration, in growing order

function orderByDuration(yourMovieList) {
  let movies = JSON.parse(JSON.stringify(yourMovieList));
    
    movies = movies.map((movie) => {
    movie.duration = movie.duration.split("h");
    if (movie.duration[0].includes('min')) {
      movie.duration.unshift(0);
    }   
    return movie;
    });
    moviesByDuration = movies.sort(function (a, b) {
      if (a.duration > b.duration) {
        return 1;
      }
      if (a.duration < b.duration) {
        return -1;
      }
      // a must be equal to b
      return 0;
    });
    return movies;
  }

console.log(orderByDuration(movies))


// // // How many movies did STEVEN SPIELBERG


// // // Order by title and print the first 20 titles


// // // Best yearly rate average


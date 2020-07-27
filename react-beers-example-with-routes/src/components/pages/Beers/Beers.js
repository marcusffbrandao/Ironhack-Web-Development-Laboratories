import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PunkAPI from 'punkapi-javascript-wrapper';

const punkApi = new PunkAPI();

class Beers extends Component  {
  state = {
    beers: [],
  };

  async componentDidMount() {
    // setTimeout( async () => {
    // }, 3000);
    const beers = await punkApi.getBeers();
    this.updateBeersState(beers);
  }

  updateBeersState(beersArray) {
    this.setState({ beers: beersArray })
  }

  listBeers = () => {
    return this.state.beers.map((beer) => {
      return (
        <li key={beer.id}>
          <Link to={`/beers/${beer.id}`}>
          {beer.name} - {beer.tagline}
          </Link>
        </li>
      );
    });
  }

  addRandomBeer = async () => {
    const randomBeer = await punkApi.getRandom();
    this.state.beers.push(randomBeer[0]);

    this.updateBeersState(this.state.beers);
  }

  sortBeers = () => {
    const { beers } = this.state;
    const filteredBeers = beers.sort((a, b) => {
      return a.name.localeCompare(b.name)
    });

    this.updateBeersState(filteredBeers);
  }

  render() {
    return (
      <div>
        <button onClick={this.addRandomBeer}>Add Random Beer</button>
        <button onClick={this.sortBeers}>Sort by Name</button>
        <ul>
          {this.listBeers()}
        </ul>
      </div>
    );
  }
}

export default Beers;

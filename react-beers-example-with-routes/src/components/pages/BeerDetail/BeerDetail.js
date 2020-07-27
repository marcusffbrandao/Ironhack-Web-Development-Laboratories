import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import queryString from 'query-string';
import PunkAPI from 'punkapi-javascript-wrapper';

const punkApi = new PunkAPI();

class BeerDetail extends Component {
  state = {
    beer: {},
  }

  async componentDidMount() {
    const { id } = this.props.match.params;
    const beer = await punkApi.getBeer(id);

    this.setState({ beer: beer[0] })
  }

  render() {
    console.log(queryString.parse(this.props.location.search))
    const { beer } = this.state;
    const { id } = this.props.match.params;

    return id % 2 === 0 ? (
      (
        <div>
          <h1>{beer.name}</h1>
          <img src={beer.image_url} alt="beer" width="150px" />
          <p>{beer.tagline}</p>
        </div>
      )
    ) : (
      <Redirect to="/"/>
    )
  }
}

export default BeerDetail;

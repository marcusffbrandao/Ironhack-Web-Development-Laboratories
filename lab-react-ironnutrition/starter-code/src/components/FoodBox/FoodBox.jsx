import React, { Component } from 'react';

class FoodBox extends Component {

  state = {
    quantity: 0,
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {  
    const data = this.props.foods.map((food, idx) => {
      return (
        <div className="box" key={idx}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input
                    className="input"
                    type="number" 
                    value={this.state.quantity} onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="control">
                  <button className="button is-info">
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    });
  
    return (
      <div>
        {data}
      </div>

    );
  }

}

export default FoodBox;
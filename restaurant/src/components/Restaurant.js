import React, { Component } from 'react';
import Bar from './Bar';
import MainRoom from './MainRoom';

class Restaurant extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numOrders: 0
    }

  }

  addOrder() {
    this.setState({
      numOrders: this.state.numOrders + 1
    })
  }

  render() {
    return (
      <div className="component">
        <h1>Restaurant - Lifting state UP!</h1>
        <h2>Orders: {this.state.numOrders}</h2>
        <h3>this.state.orders</h3>
        <h3>this.addOrder</h3>
        <button onClick={() => this.addOrder()}>Add new order</button>

        <Bar orders={this.state.numOrders} addOrder={() => this.addOrder()} />
        <MainRoom orders={this.state.numOrders} addOrder={() => this.addOrder()} />
      </div>
    )
  }
}

export default Restaurant;
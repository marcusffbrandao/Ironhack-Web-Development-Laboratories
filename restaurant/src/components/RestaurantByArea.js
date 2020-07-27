import React, { Component } from 'react';
import Bar from './Bar';
import MainRoom from './MainRoom';

class RestaurantByArea extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numOrders: 0,
      barOrders: 0,
      mainRoomOrders: 0,
      loungeOrders: 0,
      takeoutOrders: 0
    }

  }

  // obsolete: use only with original Restaurant component
  // ./components/Restaurant.js
  addOrder() {
    this.setState({
      numOrders: this.state.numOrders + 1
    })
  }

  addOrderByArea(areaName) {
    this.setState({
      numOrders: this.state.numOrders + 1,
      [areaName]: this.state[areaName] + 1
    })
  }

  render() {
    return (
      <div className="component">
        <h1>Restaurant - Lifting state UP!</h1>
        <h2>Total Orders: {this.state.numOrders}</h2>
        <h2>Takeout Orders: {this.state.takeoutOrders}</h2>
        <h3>this.state.orders</h3>
        <h3>this.addOrder</h3>
        <button onClick={() => this.addOrderByArea('takeoutOrders')}>Add takeout order</button>

        <Bar orders={this.state.barOrders} addOrder={(area) => this.addOrderByArea(area)} />
        <MainRoom orders={this.state.mainRoomOrders} loungeOrders={this.state.loungeOrders} addOrder={(area) => this.addOrderByArea(area)} />
      </div>
    )
  }
}

export default RestaurantByArea;
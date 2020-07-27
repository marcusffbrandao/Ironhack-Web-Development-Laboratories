import React from 'react';

const Lounge = ({totalOrders, addNewOrder}) => {
  return (
    <div className="component">
      <h1>Lounge Component</h1>
      <h2>Orders: {totalOrders}</h2>
      <h3>props.totalOrders</h3> 
      <h3>props.addNewOrder</h3> 
      <button onClick={() => addNewOrder('loungeOrders')}>Add new order</button> 
    </div>
  )
}

export default Lounge;
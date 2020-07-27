import React from 'react';
import Lounge from './Lounge';

const MainRoom = ({ orders, addOrder, loungeOrders }) => {
  return (
    <div className="component">
      <h1>MainRoom</h1>
      <h2>Orders: {orders}</h2>
      <h3>props.orders</h3>
      <h3>props.addOrder</h3>
      <button onClick={() => addOrder('mainRoomOrders')}>Add new order</button>
      <Lounge totalOrders={loungeOrders} addNewOrder={addOrder} />
    </div>
  )
}
export default MainRoom;
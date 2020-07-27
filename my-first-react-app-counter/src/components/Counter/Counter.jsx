import React from 'react';
import './Counter.css';

const Counter = ({ text, counter }) => {
  return (
    <div>
      <h2>
        {text}
        <span className="my-counter">{counter}</span>
      </h2>
    </div>
  );
};

export default Counter;

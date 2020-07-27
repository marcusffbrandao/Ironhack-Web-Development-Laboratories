import React from 'react';
import './Button.css';

const Button = ({ onClickFunction, classStyles, children }) => {
  return (
    <div>
      <button className={`button ${classStyles}`} onClick={() => onClickFunction()}>
        {children}
      </button>
    </div>
  );
};

export default Button;

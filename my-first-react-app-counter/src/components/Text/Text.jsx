import React from 'react';
import './Text.css';

const Text = ({ children }) => {
  return (
    <div>
      <p>{children}</p>
    </div>
  );
};

export default Text;

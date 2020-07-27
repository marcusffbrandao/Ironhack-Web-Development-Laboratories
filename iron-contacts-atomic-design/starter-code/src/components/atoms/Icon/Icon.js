import React from 'react';

const Icon = ({ pictureUrl, name, width }) => {
  return (
    <img src={pictureUrl} alt={name} width={width} />
  );
}

export default Icon;

import React from 'react';

const Square = ({ value, onClick, iswinningSquare }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${iswinningSquare ? 'winning' : ''} ${
        value === 'X' ? 'text-orange' : 'text-green'
      }`}
    >
      {' '}
      {value}{' '}
    </button>
  );
};

export default Square;

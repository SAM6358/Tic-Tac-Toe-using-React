import React from 'react';

const Square = ({ value, onClick, iswinningSquare }) => {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: iswinningSquare ? 'bold' : 'normal' }}
    >
      {' '}
      {value}{' '}
    </button>
  );
};

export default Square;

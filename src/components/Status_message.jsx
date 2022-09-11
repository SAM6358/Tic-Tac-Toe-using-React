import React from 'react';

const Status_message = ({ winner, curr }) => {
  const nomovesleft = curr.board.every(element => element !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-orange' : 'text-green'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !nomovesleft && (
        <>
          It's player{' '}
          <span className={curr.isXnext ? 'text-green' : 'text-orange'}>
            {curr.isXnext ? 'O' : 'X'}'s turn{' '}
          </span>
        </>
      )}
      {!winner && nomovesleft && (
        <>
          {' '}
          It's a tie between player <span className="text-orange">
            {' '}
            X{' '}
          </span> and <span className="text-green"> O </span>
        </>
      )}
    </div>
  );
};

export default Status_message;

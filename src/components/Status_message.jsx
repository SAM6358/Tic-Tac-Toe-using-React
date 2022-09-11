import React from 'react';

const Status_message = ({ winner, curr }) => {
  const nomovesleft = curr.board.every(element => element !== null);

  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner &&
        !nomovesleft &&
        `It's player ${curr.isXnext ? 'O' : 'X'}'s turn `}
      {!winner && nomovesleft && ` It's a tie between player X and O `}
    </h2>
  );
};

export default Status_message;

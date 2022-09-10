import React, { useState } from 'react';
import Square from './Square';
const Board = () => {
  const [board, update_state] = useState(Array(9).fill(null));
  const [isXnext, setXnext] = useState(false);

  const handlesquareclick = position => {
    if (board[position]) return;
    update_state(prev => {
      return prev.map((square, pos) => {
        if (pos === position) {
          return isXnext ? 'O' : 'X';
        }
        return square;
      });
    });
    setXnext(prev => !prev);
  };
  const renderSquare = position => {
    return (
      <Square
        value={board[position]}
        onClick={() => handlesquareclick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};

export default Board;

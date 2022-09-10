import React, { useState } from 'react';
import Board from './components/Board';
import { calculateWinner } from './winner';
import './styles/main.scss';

const App = () => {
  const [board, update_state] = useState(Array(9).fill(null));
  const [isXnext, setXnext] = useState(false);
  const winner = calculateWinner(board);
  const message = winner
    ? `Winner is ${winner}`
    : ` It's player ${isXnext ? 'O' : 'X'}'s turn `;

  const handlesquareclick = position => {
    if (board[position] || winner) return;
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

  return (
    <div className="app">
      <h1> Tic Tac Toe </h1>
      <h2>{message}</h2>
      <Board board={board} handlesquareclick={handlesquareclick} />
    </div>
  );
};

export default App;

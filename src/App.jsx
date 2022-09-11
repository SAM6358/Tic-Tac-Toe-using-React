import React, { useState } from 'react';
import Board from './components/Board';
import History from './components/History';
import Status_message from './components/Status_message';
import { calculateWinner } from './winner';
import './styles/main.scss';

const App = () => {
  const [history, update_history] = useState([
    { board: Array(9).fill(null), isXnext: true },
  ]);
  const [currentmove, set_currentmove] = useState(0);

  const curr = history[currentmove];

  const winner = calculateWinner(curr.board);

  const handlesquareclick = position => {
    if (curr.board[position] || winner) return;

    update_history(prev => {
      const last = prev[prev.length - 1];

      const newBoard = last.board.map((square, pos) => {
        if (pos === position) {
          return last.isXnext ? 'O' : 'X';
        }
        return square;
      });
      return prev.concat({ board: newBoard, isXnext: !last.isXnext });
    });
    set_currentmove(prev => prev + 1);
  };

  const moveTo = move => {
    set_currentmove(move);
  };

  return (
    <div className="app">
      <h1> Tic Tac Toe </h1>
      <Status_message winner={winner} curr={curr} />
      <Board board={curr.board} handlesquareclick={handlesquareclick} />
      <History history={history} moveTo={moveTo} currentmove={currentmove} />
    </div>
  );
};

export default App;

import React from 'react';
import './GameOver.css';

interface IGameOver {
  newGame(): void;
}

const GameOver: React.FC<IGameOver> = (props) => {
  return (
    <div className="game-over-wrapper">
      <div className="game-over-header">GameOver</div>
      <button className="game-over-button" onClick={() => props.newGame()}>
        New Game
      </button>
    </div>
  );
};

export default GameOver;

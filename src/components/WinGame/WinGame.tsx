import React from 'react';
import './WinGame.css';

interface IWinGame {
  newGame(): void;
}

const WinGame: React.FC<IWinGame> = (props) => {
  return (
    <div className="win-game-wrapper">
      <div className="win-game-header">GameOver</div>
      <div className="win-game-header">You Win</div>
      <button className="win-game-button" onClick={() => props.newGame()}>
        New Game
      </button>
    </div>
  );
};

export default WinGame;

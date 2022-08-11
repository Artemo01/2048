import React from 'react';
import './Header.css';

interface IHeadre {
  newGame(): void;
}

const Header: React.FC<IHeadre> = (props) => {
  return (
    <div className="header-wrapper">
      <div className="header-title">2048</div>
      <button className="new-game-button" onClick={() => props.newGame()}>
        New Game
      </button>
    </div>
  );
};

export default Header;

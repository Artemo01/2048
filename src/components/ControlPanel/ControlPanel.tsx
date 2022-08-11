import React from 'react';
import './ControlPanel.css';

interface IControlPanel {
  moveLeft(checker: boolean): void;
  moveRight(checker: boolean): void;
  moveUp(checker: boolean): void;
  moveDown(checker: boolean): void;
}

const ControlPanel: React.FC<IControlPanel> = (props) => {
  return (
    <div className="control-panel-wraper">
      <div className="control-panel-label">
        <button
          className="control-panel-button up"
          onClick={() => props.moveUp(false)}
        ></button>
      </div>
      <div className="control-panel-label">
        <button
          className="control-panel-button left"
          onClick={() => props.moveLeft(false)}
        ></button>
        <button
          className="control-panel-button down"
          onClick={() => props.moveDown(false)}
        ></button>
        <button
          className="control-panel-button"
          onClick={() => props.moveRight(false)}
        ></button>
      </div>
    </div>
  );
};

export default ControlPanel;

import React, { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import ControlPanel from './components/ControlPanel/ControlPanel';
import GameOver from './components/GameOver/GameOver';
import Header from './components/Header/Header';
import WinGame from './components/WinGame/WinGame';
import { EMPTY, INITIAL_MATRIX } from './consts';
import addItem from './utils/addItem';
import duplicateObject from './utils/duplicateObect';
import isExist from './utils/isExist';

function App() {
  const [matrix, setMatrix] = useState(INITIAL_MATRIX);
  const [newGame, setNewGame] = useState(true);
  const [winGane, setWinGame] = useState(false);
  const [gameOver, setGameOver] = useState(false);

  const initalize = () => {
    let newMatrix = duplicateObject(matrix);
    addItem(newMatrix);
    addItem(newMatrix);
    setMatrix(newMatrix);
    setNewGame(false);
  };

  const moveLeft = (checker: boolean) => {
    let oldMatrix = duplicateObject(matrix);
    let newMatrix = duplicateObject(matrix);

    const arrayLenght = newMatrix.length;

    for (let i = 0; i < arrayLenght; i += 1) {
      let row = newMatrix[i];
      let element = 0;
      let nextElement = 1;

      while (element < arrayLenght) {
        if (nextElement === arrayLenght) {
          nextElement = element + 1;
          element += 1;
          continue;
        }
        if (row[element] === EMPTY && row[nextElement] === EMPTY) {
          nextElement += 1;
        } else if (row[element] !== EMPTY && row[nextElement] === EMPTY) {
          nextElement += 1;
        } else if (row[element] === EMPTY && row[nextElement] !== EMPTY) {
          row[element] = row[nextElement];
          row[nextElement] = EMPTY;
          nextElement += 1;
        } else if (row[element] !== EMPTY && row[nextElement] !== EMPTY) {
          if (row[element] === row[nextElement]) {
            row[element] = row[element] + row[nextElement];
            row[nextElement] = EMPTY;
            nextElement = element + 1;
            element += 1;
          } else {
            element += 1;
            nextElement = element + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldMatrix) !== JSON.stringify(newMatrix)) {
      if (isExist(newMatrix, 2048)) {
        setWinGame(true);
        addItem(newMatrix);
        setMatrix(newMatrix);
      } else {
        addItem(newMatrix);
      }
    }
    if (checker) {
      return newMatrix;
    } else {
      setMatrix(newMatrix);
      isExist(matrix, 2048);
      isGameOver();
    }
  };

  const moveRight = (checker: boolean) => {
    let oldMatrix = duplicateObject(matrix);
    let newMatrix = duplicateObject(matrix);

    const arrayLenght = newMatrix.length;

    for (let i = arrayLenght - 1; i >= 0; i -= 1) {
      let row = newMatrix[i];
      let element = arrayLenght - 1;
      let nextElement = element - 1;
      while (element > 0) {
        if (nextElement === -1) {
          nextElement = element - 1;
          element -= 1;
          continue;
        }
        if (row[element] === EMPTY && row[nextElement] === EMPTY) {
          nextElement -= 1;
        } else if (row[element] === EMPTY && row[nextElement] !== EMPTY) {
          row[element] = row[nextElement];
          row[nextElement] = EMPTY;
          nextElement -= 1;
        } else if (row[element] !== EMPTY && row[nextElement] === EMPTY) {
          nextElement -= 1;
        } else if (row[element] !== EMPTY && row[nextElement] !== EMPTY) {
          if (row[element] === row[nextElement]) {
            row[element] = row[element] + row[nextElement];
            row[nextElement] = EMPTY;
            nextElement = element - 1;
            element -= 1;
          } else {
            element -= 1;
            nextElement = element - 1;
          }
        }
      }
    }
    if (JSON.stringify(oldMatrix) !== JSON.stringify(newMatrix)) {
      if (isExist(newMatrix, 2048)) {
        setWinGame(true);
        addItem(newMatrix);
        setMatrix(newMatrix);
      } else {
        addItem(newMatrix);
      }
    }
    if (checker) {
      return newMatrix;
    } else {
      setMatrix(newMatrix);
      isExist(matrix, 2048);
      isGameOver();
    }
  };

  const moveUp = (checker: boolean) => {
    let newMatrix = duplicateObject(matrix);
    let oldMatrix = duplicateObject(matrix);

    const arrayLenght = newMatrix.length;

    for (let i = 0; i < arrayLenght; i += 1) {
      let element = 0;
      let nextElement = 1;
      while (element < arrayLenght) {
        if (nextElement === arrayLenght) {
          nextElement = element + 1;
          element += 1;
          continue;
        }
        if (
          newMatrix[element][i] === EMPTY &&
          newMatrix[nextElement][i] === EMPTY
        ) {
          nextElement += 1;
        } else if (
          newMatrix[element][i] === EMPTY &&
          newMatrix[nextElement][i] !== EMPTY
        ) {
          newMatrix[element][i] = newMatrix[nextElement][i];
          newMatrix[nextElement][i] = EMPTY;
          nextElement += 1;
        } else if (
          newMatrix[element][i] !== EMPTY &&
          newMatrix[nextElement][i] === EMPTY
        ) {
          nextElement += 1;
        } else if (
          newMatrix[element][i] !== EMPTY &&
          newMatrix[nextElement][i] !== EMPTY
        ) {
          if (newMatrix[element][i] === newMatrix[nextElement][i]) {
            newMatrix[element][i] =
              newMatrix[element][i] + newMatrix[nextElement][i];
            newMatrix[nextElement][i] = EMPTY;
            nextElement = element + 1;
            element += 1;
          } else {
            element += 1;
            nextElement = element + 1;
          }
        }
      }
    }
    if (JSON.stringify(oldMatrix) !== JSON.stringify(newMatrix)) {
      if (isExist(newMatrix, 2048)) {
        setWinGame(true);
        addItem(newMatrix);
        setMatrix(newMatrix);
      } else {
        addItem(newMatrix);
      }
    }
    if (checker) {
      return newMatrix;
    } else {
      setMatrix(newMatrix);
      isExist(matrix, 2048);
      isGameOver();
    }
  };

  const moveDown = (checker: boolean) => {
    let newMatrix = duplicateObject(matrix);
    let oldMatrix = duplicateObject(matrix);

    const arrayLenght = newMatrix.length;

    for (let i = arrayLenght - 1; i >= 0; i -= 1) {
      let element = newMatrix.length - 1;
      let nextElement = element - 1;
      while (element > 0) {
        if (nextElement === -1) {
          nextElement = element - 1;
          element -= 1;
          continue;
        }
        if (
          newMatrix[element][i] === EMPTY &&
          newMatrix[nextElement][i] === EMPTY
        ) {
          nextElement -= 1;
        } else if (
          newMatrix[element][i] === EMPTY &&
          newMatrix[nextElement][i] !== EMPTY
        ) {
          newMatrix[element][i] = newMatrix[nextElement][i];
          newMatrix[nextElement][i] = EMPTY;
          nextElement -= 1;
        } else if (
          newMatrix[element][i] !== EMPTY &&
          newMatrix[nextElement][i] === EMPTY
        ) {
          nextElement -= 1;
        } else if (
          newMatrix[element][i] !== EMPTY &&
          newMatrix[nextElement][i] !== EMPTY
        ) {
          if (newMatrix[element][i] === newMatrix[nextElement][i]) {
            newMatrix[element][i] =
              newMatrix[element][i] + newMatrix[nextElement][i];
            newMatrix[nextElement][i] = EMPTY;
            nextElement = element - 1;
            element -= 1;
          } else {
            element -= 1;
            nextElement = element - 1;
          }
        }
      }
    }
    if (JSON.stringify(oldMatrix) !== JSON.stringify(newMatrix)) {
      if (isExist(newMatrix, 2048)) {
        setWinGame(true);
        addItem(newMatrix);
        setMatrix(newMatrix);
      } else {
        addItem(newMatrix);
      }
    }
    if (checker) {
      return newMatrix;
    } else {
      setMatrix(newMatrix);
      isExist(matrix, 2048);
      isGameOver();
    }
  };

  const isGameOver = () => {
    switch (true) {
      case JSON.stringify(matrix) !== JSON.stringify(moveLeft(true)):
        return false;
      case JSON.stringify(matrix) !== JSON.stringify(moveRight(true)):
        return false;
      case JSON.stringify(matrix) !== JSON.stringify(moveUp(true)):
        return false;
      case JSON.stringify(matrix) !== JSON.stringify(moveDown(true)):
        return false;
      default:
        setGameOver(true);
        return true;
    }
  };

  const onNewGame = () => {
    setMatrix(INITIAL_MATRIX);
    setGameOver(false);
    setWinGame(false);
    setNewGame(true);
  };

  useEffect(() => {
    if (newGame) {
      initalize();
    }
  }, [newGame]);
  return (
    <div className="game-wrapper">
      {gameOver && <GameOver newGame={onNewGame} />}
      {winGane && <WinGame newGame={onNewGame} />}
      <Header newGame={onNewGame} />
      <Board matrix={matrix} />
      <ControlPanel
        moveLeft={moveLeft}
        moveRight={moveRight}
        moveDown={moveDown}
        moveUp={moveUp}
      />
    </div>
  );
}

export default App;

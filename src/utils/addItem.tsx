import getNewPosition from './getNewPosition';

const addItem = (newMatrix: number[][]) => {
  let [row, col] = getNewPosition();

  while (newMatrix[row][col] !== 0) {
    [row, col] = getNewPosition();
  }

  newMatrix[row][col] = Math.random() > 0.5 ? 2 : 4;
};

export default addItem;

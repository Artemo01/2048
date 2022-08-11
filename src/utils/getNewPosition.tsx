const getNewPosition = () => {
  const row = Math.floor(Math.random() * 4);
  const col = Math.floor(Math.random() * 4);
  return [row, col];
};

export default getNewPosition;

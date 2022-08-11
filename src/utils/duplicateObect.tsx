const duplicateObject = (initObject: number[][]) => {
  const newObject = JSON.parse(JSON.stringify(initObject));
  return newObject;
};

export default duplicateObject;

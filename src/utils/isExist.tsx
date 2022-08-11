import React from 'react';

const isExist = (matrix: number[][], num: number) => {
  let found = false;
  for (let i = 1; i < matrix.length; i += 1) {
    found = matrix[i].some((i) => i === num);
    if (found) break;
  }
  return found;
};

export default isExist;

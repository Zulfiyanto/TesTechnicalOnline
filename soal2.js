const matrix = (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push([]);
    for (let j = 0; j < array[i].length; j++) {
      result[i].push(array[j][i]);
    }
  }
  return result;
};

console.log(
  matrix([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);

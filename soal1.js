const word = (words) => {
  const arr = words.split("");
  let result = 0;
  for (let i of arr) {
    if (i === i.toUpperCase()) result++;
  }
  return result;
};

console.log(word("PapaMakanJerukWaktuBuka"));

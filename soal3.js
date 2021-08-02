const string = ["D", "U", "M", "B", "W", "A", "Y", "S", "I", "D"];
const loop = () => {
  let result = "";

  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < string.length; j++) {
      if (i === 2 || i === 4) {
        if (j % 2 === 0) {
          result += "* ";
        } else {
          result += "= ";
        }
      } else if (i === 3) {
        result += string[j];
        result += " ";
      } else if (j % 2 === 0) {
        result += "= ";
      } else {
        result += "* ";
      }
    }
    result += "\n";
  }
  return result;
};

console.log(loop());

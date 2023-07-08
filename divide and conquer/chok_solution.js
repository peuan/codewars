// first version
function divCon(numbers = []) {
  const totalInt = numbers
    .filter((number) => typeof number === "number")
    .reduce((prev, current) => {
      return prev + current;
    }, 0);
  const totalString = numbers
    .filter((number) => typeof number === "string")
    .reduce((prev, current) => {
      return prev + Number(current);
    }, 0);
  return totalInt - totalString;
}

// refactor version
function divCon(numbers = []) {
    return numbers.reduce((prev, current) => {
      if (typeof current === "number") {
        return prev + current;
      }
      return prev - current;
    }, 0);
  }

console.log(divCon([9, 3, "7", "3"]));
console.log(divCon(["5", "0", 9, 3, 2, 1, "9", 6, 7]));
console.log(divCon(["3", 6, 6, 0, "5", 8, 5, "6", 2, "0"]));

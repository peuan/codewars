function posAverage(s = "") {
  const numbers = s.split(", ");
  numbers
  let commonNum = 0;
  let total = 0;

  for (let i = 0; i < numbers.length; i++) {

    for (let j = i + 1; j < numbers.length; j++) {

      for (let k = 0; k < [...numbers[i]].length; k++) {
        if ([...numbers[i]][k] === [...numbers[j]][k]) {
          commonNum++;
        }
        total++;
      }
    }
  }

  commonNum
  total
  return commonNum * 100 / total;
}

console.log(
  // posAverage("466960, 069060"),
  // posAverage("466960, 069060, 494940"),
  posAverage("466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"),
  // posAverage(),
);
function posAverage(s = "") {
  let totalMatched = 0;
  let totalCompare = 0;
  const numbersStringList = s.split(", ");

  numbersStringList.forEach((numbersString, numbersStringIndex) => {
    [...numbersString].forEach((eachNumber, eachNumberIndex) => {

      numbersStringList.forEach((numbersString, secondNumbersStringIndex) => {
        if (numbersStringIndex !== secondNumbersStringIndex) {
          totalCompare += 1;
        }

        if (
          numbersString[eachNumberIndex] === eachNumber &&
          numbersStringIndex !== secondNumbersStringIndex
        ) {
          totalMatched += 1;
        }
      });
    });
  });

  return (totalMatched / 2 / (totalCompare / 2)) * 100;
}

console.log(
  posAverage(
    "466960, 069060, 494940, 060069, 060090, 640009, 496464, 606900, 004000, 944096"
  )
);

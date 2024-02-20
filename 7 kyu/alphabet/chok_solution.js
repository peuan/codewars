function alphabet(ns = []) {
  const sortedNumbers = [...ns].sort((a, b) => a - b);
  const [a, b] = sortedNumbers;
  const c = sortedNumbers.find(
    (number) => number > b && sortedNumbers.includes(number * b)
  );
  const d = sortedNumbers.find(
    (number) =>
      number > c &&
      sortedNumbers.includes(number * a) &&
      sortedNumbers.includes(number * c)
  );
  return d;
}

// console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4]), 4);
// console.log(alphabet([2, 6, 7, 3, 14, 35, 15, 5]), 7);
console.log(alphabet([4, 51, 2, 51, 2, 1, 8, 204]));
// console.log(alphabet([20, 10, 6, 5, 4, 3, 2, 12]), 5);
// console.log(alphabet([2, 6, 18, 3, 6, 7, 42, 14]), 7);
// console.log(alphabet([7, 96, 8, 240, 12, 140, 20, 56]), 20);
// console.log(alphabet([20, 30, 6, 7, 4, 42, 28, 5]), 7);

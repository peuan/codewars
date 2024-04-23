function seven(m = 0) {
  let second = m % 10;
  second
  let first = (m - second) / 10;
  first
  let result = m;
  let counter = 0;

  while (result > 99) {
    counter++;
    result = first - (2 * second);
    second = result % 10;
    first = (result - second) / 10;
  }

  return [result, counter]
}

console.log(
  // seven(371),
  // seven(1603), // [7, 2]
  seven(1021), // [10, 2])
);

// 160 - (2 * 3) --> 154
// 15 - (2 * 4) --> 7

// first - (2 * second)

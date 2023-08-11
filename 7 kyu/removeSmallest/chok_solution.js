function removeSmallest(numbers = []) {
  const min = Math.min(...numbers);
  let newNumbers = [...numbers];

  for (let index = 0; index < numbers.length; index++) {
    if (min === numbers[index]) {
      newNumbers.splice(index, 1)
      break;
    }
  }

  return newNumbers
}

console.log(
  removeSmallest([1, 2, 3, 4, 5]),
  [2, 3, 4, 5],
  "Wrong result for [1, 2, 3, 4, 5]"
);
// console.log(
//   removeSmallest([5, 3, 2, 1, 4]),
//   [5, 3, 2, 4],
//   "Wrong result for [5, 3, 2, 1, 4]"
// );
// console.log(
//   removeSmallest([2, 2, 1, 2, 1]),
//   [2, 2, 2, 1],
//   "Wrong result for [2, 2, 1, 2, 1]"
// );
// console.log(removeSmallest([]), [], "Wrong result for []");

// console.log(
//   removeSmallest([
//     156, 61, 306, 283, 96, 72, 288, 111, 148, 368, 30, 168, 222, 210, 339, 361,
//     361,
//   ])
// );

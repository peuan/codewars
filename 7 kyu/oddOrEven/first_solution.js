function oddOrEven(array = []) {
  return array.reduce((acc, curr) => acc + curr, 0) % 2 === 0 ? "even" : "odd";
}

console.log(
  oddOrEven([0, 1, 5]),
  oddOrEven([0, 1, 3]),
  oddOrEven([1023, 1, 2]),
  oddOrEven([0]),
);
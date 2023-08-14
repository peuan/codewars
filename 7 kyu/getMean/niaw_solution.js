function getMean(arr, x, y) {
  const first = arr.slice(0, x).reduce((acc, curr) => (acc += curr), 0) / x
  const second = arr.slice(-y).reduce((acc, curr) => (acc += curr), 0) / y
  const mean = (first + second) / 2

  return x <= 1 || x > arr.slice(0, x).length || y > arr.slice(-y).length
    ? -1
    : mean
}

console.log(getMean([1, 3, 2, 4], 2, 3), 2.5)

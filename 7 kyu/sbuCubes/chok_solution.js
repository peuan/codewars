function sumCubes(n) {
  return Array.from({ length: n })
    .fill(0)
    .map((_, i) => i + 1)
    .reduce((prev, current) => {
      return (prev += current * current * current);
    }, 0);
}

console.log(sumCubes());

// 1 * 1 * 1 = 1
// 2 * 2 * 2 = 8
// 3 * 3 * 3 = 27
// 1 + 8 + 27

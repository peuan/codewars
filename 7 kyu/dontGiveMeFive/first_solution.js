function dontGiveMeFive(start = 0, end = 0) {
  const result = [];
  for (let i = start; i <= end; i++) {
    result.push(i);
  }
  return result.filter(v => !v.toString().includes("5")).length;
}

console.log(
  dontGiveMeFive(1,9),
  dontGiveMeFive(4, 17),
  dontGiveMeFive(-15, 75),
);

console.log(
  dontGiveMeFive(1,9) === 8,
  dontGiveMeFive(4, 17) === 12,
  dontGiveMeFive(-15, 75) === 72,
);
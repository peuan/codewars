function sumCubes(n){
  const arr = Array.from({length: n}, (value, index) => index + 1);
  arr
  const sum = arr.map(v => Math.pow(v,3));
  sum
  return sum.reduce((acc, v) =>acc+v, 0);
}

console.log(
  sumCubes(2),
  // sumCubes(3),
);
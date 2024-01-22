function Xbonacci(signature = [], n = 0){
  const limit = signature.length;
  const start = [...signature];

  for (let index = limit; index < n; index++) {
    const sum = start.slice(-limit).reduce((acc, curr) => acc + curr, 0);
    start.push(sum);
  }
  return start.slice(0,n);
}

// [0,1,1,2,3,5,8,13,21,34]
// Xbonacci([0,1],10),

console.log(
  Xbonacci([1,1],10), // [1,1,2,3,5,8,13,21,34,55]
  // Xbonacci([0,0,0,0,1],10), // [0,0,0,0,1,1,2,4,8,16]
  // Xbonacci([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 0 ], 9), // [1, 2, 3, 4, 5, 6, 7, 8, 9]
);
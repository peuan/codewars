function Xbonacci(signature = [], n = 0) {
  const results = [...signature];

  for (let index = signature.length; index < n; index++) {
    let nextNumber = 0;

    for (let j = 1; j <= signature.length; j++) {
      nextNumber += results[index - j];
    }

    results.push(nextNumber);
  }

  return results.splice(0, n);
}

// console.log(Xbonacci([0, 1], 10), [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
// console.log(Xbonacci([1,1],10),[1,1,2,3,5,8,13,21,34,55]);
// console.log(Xbonacci([0, 0, 0, 0, 1], 10), [0, 0, 0, 0, 1, 1, 2, 4, 8, 16]);
// console.log(Xbonacci([1,0,0,0,0,0,1],10),[1,0,0,0,0,0,1,2,3,6]);
console.log(
  Xbonacci([1, 0, 0, 0, 0, 0, 0, 0, 0, 0], 20),
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 4, 8, 16, 32, 64, 128, 256]
);

console.log(Xbonacci([5, 11, 9, 11, 12, 17, 16, 2, 0, 1, 16, 13, 14], 3));

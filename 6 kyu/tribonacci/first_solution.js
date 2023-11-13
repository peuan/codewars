function tribonacci(signature,n) {
  const result = [...signature];
  // [1, 1, 1] 3 < 3
  for (let index = 3; index < n; index++) {
    const value = (result[index-3]) + (result[index-2]) + (result[index-1]);
    // value
    result.push(value);
  }
  return result.slice(0, n);
}

console.log(
  tribonacci([1,1,1], 10),
  // [1,1,1,3,5,9,17,31,57,105, 1, 1, 1].splice(0, 10),
);
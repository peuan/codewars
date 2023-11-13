function tribonacci(signature, n) {
  if (n <= 3) {
    return signature.slice(0, n)
  }

  let sum = signature
  for (let i = 3; i < n; i++) {
    sum.push(signature[i - 1] + signature[i - 2] + signature[i - 3])
  }
  return sum
}

console.log(tribonacci([1, 1, 1], 10))

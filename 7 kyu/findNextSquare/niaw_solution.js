function findNextSquare(sq) {
  const sqrt = Math.sqrt(sq) + 1
  const nextSqrt = sqrt * sqrt
  return Number.isInteger(nextSqrt) ? nextSqrt : -1
}

console.log(findNextSquare(114))

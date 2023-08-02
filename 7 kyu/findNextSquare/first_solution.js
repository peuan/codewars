function findNextSquare(sq) {
  const square = Math.sqrt(sq);
  // Return the next square if sq is a perfect square, -1 otherwise
  if (sq % square !== 0) {
    return -1
  }

  return (square + 1) * (square + 1) ;
}

// 144, 676, 320356
console.log(
  findNextSquare(121),
  findNextSquare(625),
  findNextSquare(319225),
);
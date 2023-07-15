function breakChocolate(n, m) {
  if (n === 0 || m === 0) {
    return 0;
  }

  return n * m - 1;
}

console.log(breakChocolate(2, 2), 3);
console.log(breakChocolate(1, 1), 0);

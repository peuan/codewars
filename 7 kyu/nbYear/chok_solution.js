function nbYear(p0, percent, aug, p, year = 0) {
  const number = p0 + Math.floor((p0 * percent) / 100) + aug;
  if (number >= p) {
    return year + 1;
  }

  return nbYear(number, percent, aug, p, year + 1);
}

console.log(nbYear(1500, 5, 100, 5000), 15);
console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);
console.log(nbYear(1500, 5, 100, 5000), 15);

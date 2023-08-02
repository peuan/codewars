function nbYear(p0, percent, aug, p) {
  let population = p0;
  let years = 0;

  while (population < p) {
    population += Math.floor(population * (percent / 100)) + aug;
    years++;
  }

  return years;
}

// 15, 10
console.log(
  nbYear(1500, 5, 100, 5000),
  nbYear(1500000, 2.5, 10000, 2000000),
);
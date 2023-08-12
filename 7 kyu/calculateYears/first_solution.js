function calculateYears(principal=0, interest=0, tax=0, desired=0) {
  let years = 0;
  let sum = principal;

  while (sum < desired) {
    sum = sum + ((sum * interest) * (1 - tax));
    years++;
  }
  return years;
}

console.log(
  calculateYears(1000, 0.05, 0.18, 1100)
);
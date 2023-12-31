function calculateYears(principal, interest, tax, desired, y = 0) {
  if (principal === desired && y === 0) {
    return 0;
  }

  const interestAmount = principal * interest;
  const taxAmount = interestAmount * tax;
  const currentAmount = principal + interestAmount - taxAmount;

  if (currentAmount >= desired) {
    return y + 1;
  }

  return calculateYears(currentAmount, interest, tax, desired, y + 1);
}

console.log(calculateYears(1000, 0.05, 0.18, 1100), 3);
console.log(calculateYears(1000, 0.01625, 0.18, 1200), 14);
console.log(calculateYears(1000, 0.05, 0.18, 1000), 0);

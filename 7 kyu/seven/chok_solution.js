function seven(m, total = 0) {
  if (m < 100) {
    return [m, total];
  }

  const num1 = Math.floor(m / 10);
  const num2 = m % 10;
  const nextNumber = num1 - 2 * num2;

  return seven(nextNumber, total + 1);
}

console.log(seven(1603));

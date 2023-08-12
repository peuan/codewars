function calculateYears(principal, interest, tax, desired) {
  let years = 0
  let sumOfMoney = principal

  while (sumOfMoney < desired) {
    let interestAmount = sumOfMoney * interest
    let newTaxesAmount = interestAmount * tax
    let profit = interestAmount - newTaxesAmount
    sumOfMoney = sumOfMoney + profit
    years++
  }
  return years
}

console.log(calculateYears(1000, 0.05, 0.18, 1100))

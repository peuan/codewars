function doMath(string) {
  const sorting = string
    .split(" ")
    .sort((a, b) =>
      a.replace(/[\d]/g, "").localeCompare(b.replace(/[\d]/g, ""))
    )
    .map((item) => item.replace(/[^0-9]/g, ""))
    .map((item) => +item)

  let currentOperator = "+"
  let currentResult = sorting[0]

  for (let i = 1; i < sorting.length; i++) {
    switch (currentOperator) {
      case "+":
        currentResult += sorting[i]
        currentOperator = "-"
        continue
      case "-":
        currentResult -= sorting[i]
        currentOperator = "*"
        continue
      case "*":
        currentResult *= sorting[i]
        currentOperator = "/"
        continue
      case "/":
        currentResult /= sorting[i]
        currentOperator = "+"
        continue
      default:
        break
    }
  }
  return Math.round(currentResult)
}

console.log(doMath("24z6 1x23 y369 89a 900b"))

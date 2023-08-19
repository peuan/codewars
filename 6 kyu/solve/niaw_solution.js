function solve(s) {
  return Math.max(
    ...s
      .split(/[aeiou]/g)
      .map((item) =>
        [...item]
          .map((item) => item.charCodeAt() - 96)
          .reduce((acc, curr) => (acc += curr), 0)
      )
  )
}

console.log(solve("strength"))

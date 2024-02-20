function alphabet(ns) {
  let A
  let B
  let C
  let D
  const sortingNumbers = [...new Set(ns.sort((a, b) => a - b))]
  A = sortingNumbers[0]
  B = sortingNumbers[1]

  for (let i = 0; i < ns.length; i++) {
    if (ns[i] > B) {
      const findBC = ns.find((item) => item === B * ns[i])
      if (findBC) {
        C = findBC / B
      }
    }
    if (ns[i] > C) {
      const findCD = ns.find((item) => item === C * ns[i])

      if (findCD) {
        D = findCD / C
      }
    }
  }
  return D
}

console.log(alphabet([2, 3, 4, 1, 12, 6, 2, 4]))

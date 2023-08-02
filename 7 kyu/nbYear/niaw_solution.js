function nbYear(p0, percent, aug, p) {
  let y = 0
  while (p0 < p) {
    let result = p0 + Math.round(p0 * (percent / 100) + aug)
    y++
    p0 = result
  }
  return y
}

console.log(nbYear(1500, 5, 100, 5000))

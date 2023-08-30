function predictAge(...ages) {
  return Math.floor(
    Math.sqrt(
      ages.map((item) => item * item).reduce((acc, curr) => (acc += curr), 0)
    ) / 2
  )
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45))

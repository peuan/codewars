var number = function busStops(busStops) {
  return (
    busStops.map((item) => item[0]).reduce((acc, curr) => acc + curr, 0) -
    busStops.map((item) => item[1]).reduce((acc, curr) => acc + curr, 0)
  )
}

console.log(
  number([
    [10, 0],
    [3, 5],
    [5, 8],
  ])
)

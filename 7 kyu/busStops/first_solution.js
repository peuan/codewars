function busStops(busStops = []) {
  return busStops.reduce((acc, curr) => {
    acc = acc + curr[0] - curr[1]
    return acc;
  }, 0);
}

console.log(
  busStops([[10,0],[3,5],[5,8]]), // 5
  busStops([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]]), // 17
  busStops([[3,0],[9,1],[4,8],[12,2],[6,1],[7,8]]), //21
);
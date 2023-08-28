export function number(busStops: [number, number][]): number {
  const sumOfActivity = busStops.reduce((acc, stop) => {
	acc[0] += stop[0]
	acc[1] += stop[1]
	return acc
	// return acc + stop[0] - stop[1]
  }, [0, 0])

  return sumOfActivity[0] - sumOfActivity[1];
}

console.log(number([[10,0],[3,5],[5,8]]));
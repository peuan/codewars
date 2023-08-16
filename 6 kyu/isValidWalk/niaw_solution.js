function isValidWalk(walk) {
  const count = { n: 0, s: 0, w: 0, e: 0 }

  for (var i = 0; i < walk.length; i++) {
    count[walk[i]] += 1
  }

  return count.n === count.s && count.w === count.e && walk.length === 10
}

console.log(isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]))

function findShort(s = "") {
  return Math.min(...s.split(" ").map((s) => s.length));
}

console.log(findShort("bitcoin take over the world maybe who knows perhaps"))
function isValidWalk(walk = []) {
  const { n, s, w, e } = walk.reduce(
    (prev, current) => {
      prev[current] += 1;
      return prev;
    },
    { n: 0, s: 0, w: 0, e: 0 }
  );

  return n === s && w === e && walk.length === 10;
}

console.log(
  isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return true"
);
console.log(
  isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
  "should return false"
);
console.log(isValidWalk(["w"]), "should return false");
console.log(
  isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
  "should return false"
);

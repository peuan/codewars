function isValidWalk(walk) {
  let result = {
    n: 0,
    s: 0,
    e: 0,
    w: 0,
  }

  for (let i = 0; i < walk.length; i++) {
    if (walk[i] === 'n') {
      result.n++;
    } else if (walk[i] === 's') {
      result.s++;
    } else if (walk[i] === 'e') {
      result.e++;
    } else if (walk[i] === 'w') {
      result.w++;
    }
  }

  return result.n === result.s && result.e === result.w && walk.length === 10;
}

console.log(
  isValidWalk(['n','s','n','s','n','s','n','s','n','s']),
  isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'],)
);
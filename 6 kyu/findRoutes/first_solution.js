function findRoutes(routes = [[]]) {
  let startIndex = '';

  // Find what is the starting country index
  for (let i = 0; i < routes.length; i++) {
    const fPair = routes[i][0];

    let isNotWhatWeFind = false;
    for (let j = 0; j < routes.length; j++) {
      const sPair = routes[j][1];

      if (fPair === sPair) {
        isNotWhatWeFind = true;
        break;
      }
    }

    if (!isNotWhatWeFind) {
      startIndex = i;
      break;
    }
  }

  const result = [...routes[startIndex]];
  let nextCountry = result[1];

  while (routes.length + 1 !== result.length) {
    for (let j = 0; j < routes.length; j++) {
      const prev = routes[j][0];

      if (prev === nextCountry) {
        result.push(routes[j][1]);
        nextCountry = routes[j][1];
        break;
      }
    }
  }
  return result.join(', ');
}

// "USA, BRA, KSA, UAE, JPN, PHL"
console.log(
  findRoutes([["USA", "BRA"], ["JPN", "PHL"], ["BRA", "KSA"], ["KSA", "UAE"], ["UAE", "JPN"]]),
);
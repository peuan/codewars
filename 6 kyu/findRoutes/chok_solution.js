// it should return the places from the given routes
function findRoutes(routes = [[]]) {
  let startName = "";
  let nextDestinationName = "";
  const destinations = [];

  routes.forEach((route) => {
    const [, destination] = route;
    destinations.push(destination);
  });

  const [start, destination] = routes.find((route) => {
    const [start] = route;
    return !destinations.includes(start);
  });

  startName = start;
  nextDestinationName = destination;

  const results = [startName, nextDestinationName];

  for (let index = 1; index < routes.length; index++) {
    const nextDestinations = routes.find((route) => {
      const [start] = route;
      return start === nextDestinationName;
    });

    if (nextDestinations) {
      const [, destination] = nextDestinations;
      nextDestinationName = destination;
      results.push(destination);
    }
  }

  return results.join(", ");
}

// Expected: 'MNL, TAG, CEB, TAC, BOR', instead got: 'MNL, TAG, CEB'
console.log(
  findRoutes([
    ["BRA", "KSA"],
    ["USA", "BRA"],
    ["JPN", "PHL"],
    ["KSA", "UAE"],
    ["UAE", "JPN"],
  ])
);

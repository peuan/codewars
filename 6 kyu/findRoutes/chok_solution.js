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

  const result = [startName, nextDestinationName];

  routes.forEach(() => {
    const nextDestinations = routes.find((route) => {
      const [start] = route;
      return start === nextDestinationName;
    });

    if (nextDestinations) {
      const [, destination] = nextDestinations;
      nextDestinationName = destination;
      result.push(destination);
    }
  });

  return result.join(", ");
}

// Expected: 'MNL, TAG, CEB, TAC, BOR', instead got: 'MNL, TAG, CEB'
console.log(
  findRoutes([
    ["MNL", "TAG"],
    ["CEB", "TAC"],
    ["TAG", "CEB"],
    ["TAC", "BOR"],
  ])
);

function predictAge(...ages) {
  const totalDoubleAge = ages
    .map((age) => age * age)
    .reduce((previous, current) => previous + current, 0);

  return Math.floor(Math.sqrt(totalDoubleAge) / 2);
}

console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);

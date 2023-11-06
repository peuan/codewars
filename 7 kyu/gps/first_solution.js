function gps(s = 0, x = []) {
  if (!x.length || x.length === 1) {
    return 0;
  }

  const intervals = [];
  for (let index = 0; index < x.length; index++) {
    const distance = Math.abs(x[index + 1] - x[index]);
    if (index < x.length - 1) {
      intervals.push(Math.floor((3600 * distance) / s));
    }
  }
  return Math.max(...intervals);
}


console.log(
  gps(15, [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25]),
  // gps(20, [0.0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61]),
);
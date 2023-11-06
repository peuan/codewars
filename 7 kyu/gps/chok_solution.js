function gps(s, x = []) {
  const { maxNumber } = x.reduce(
    (previousValue, current) => {
      const maxNumber = Math.max(
        previousValue.maxNumber,
        (3600 * (current - previousValue.previousNumber)) / s
      );

      return {
        previousNumber: current,
        maxNumber,
      };
    },
    {
      previousNumber: 0,
      maxNumber: 0,
    }
  );

  return Math.floor(maxNumber);
}

const x = [0.0, 0.19, 0.5, 0.75, 1.0, 1.25, 1.5, 1.75, 2.0, 2.25];
const s = 15;
const u = 74;
console.log(gps(s, x), u);

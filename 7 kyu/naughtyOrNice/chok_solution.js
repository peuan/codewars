function naughtyOrNice(data) {
  const { Nice, Naughty } = Object.values(data)
    .map((value) => Object.values(value))
    .flat()
    .reduce(
      (prev, current) => {
        prev[current] += 1;

        return prev;
      },
      {
        Nice: 0,
        Naughty: 0,
      }
    );

  return Naughty > Nice ? "Naughty!" : "Nice!";
}

console.log(
  naughtyOrNice({
    January: {
      1: "Naughty",
      2: "Naughty",
      31: "Nice",
    },
    February: {
      1: "Nice",
      2: "Naughty",
      28: "Nice",
    },
    December: {
      1: "Nice",
      2: "Nice",
      31: "Naughty",
    },
  })
);

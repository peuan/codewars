const capitals = function (word = "") {
  return [...word]
    .filter((w) => w.toUpperCase() === w)
    .map((w) => word.indexOf(w));
};

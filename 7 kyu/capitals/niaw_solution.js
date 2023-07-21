var capitals = function (word) {
  return word.match(/[^a-z]/g).map((v) => word.indexOf(v));
};

console.log(capitals("CodEWaRs"));

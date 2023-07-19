const printerError = (s) =>
  [...s].filter((v) => v.charCodeAt() < 97 || v.charCodeAt() > 109).length +
  "/" +
  s.length;

console.log(printerError("aaaxbbbbyyhwawiwjjjwwm"));

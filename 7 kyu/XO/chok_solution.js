function XO(str = "") {
  const result = [...str.toLowerCase()].reduce(
    (previous, current) => {
      if (current === "x") {
        previous.x += 1;
      } else if (current === "o") {
        previous.o += 1;
      }

      return previous;
    },
    { x: 0, o: 0 }
  );

  return result.x === result.o;
}

console.log(XO("xo"), true);
console.log(XO("xxOo"), true);
console.log(XO("xxxm"), false);
console.log(XO("Oo"), false);
console.log(XO("ooom"), false);
console.log(XO(""), false);

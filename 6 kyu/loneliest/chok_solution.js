function loneliest(str = "") {
  const counter = {
    tempSpace: 0,
  };
  let countingPerson = "";

  str
    .trim()
    .split("")
    .forEach((currentPerson) => {
      if (countingPerson !== currentPerson && currentPerson !== " ") {
        counter[currentPerson] = counter.tempSpace || 0;
        countingPerson = currentPerson;
        counter.tempSpace = 0;
      } else {
        counter.tempSpace += 1;
        counter[countingPerson] += 1;
      }
    });

  delete counter.tempSpace;

  const maxSpace = Math.max(...Object.values(counter));

  return Object.entries(counter)
    .filter(([, value]) => value === maxSpace)
    .map(([key]) => key);
}

console.log(loneliest("a b  c"), ["b"]);
console.log(loneliest("a bcs           d k"), ["d"]);
console.log(loneliest("    a b  sc     p     t   k"), ["p"]);
console.log(loneliest("a  b  c  de"), ["b", "c"]);
console.log(loneliest("     a  b  c de        "), ["b"]);
console.log(loneliest("abc"), ["a", "b", "c"]);

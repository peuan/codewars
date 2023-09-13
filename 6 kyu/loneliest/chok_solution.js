function loneliest(str = "") {
  const counter = {
    tempSpace: 0,
  };
  let currentPerson = "";
  str
    .trim()
    .split("")
    .forEach((person) => {
      if (currentPerson !== person && person !== " ") {
        counter[person] = counter.tempSpace || 0;
        currentPerson = person;
        counter.tempSpace = 0;
      }
      if (person === " ") {
        counter.tempSpace += 1;
        counter[currentPerson] += 1;
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

function isIsogram(str = "") {
  const result = [];
  return str.toLowerCase().split("").map(value => result.includes(value) ? false : result.push(value)).every(v => typeof v === "number");
}

// T T F F F
console.log(
  isIsogram("Dermatoglyphics"),
  isIsogram("isogram"),
  isIsogram("aba"),
  isIsogram("moOse"),
  isIsogram("isIsogram"),
);
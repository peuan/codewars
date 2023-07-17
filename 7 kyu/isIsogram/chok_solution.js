function isIsogram(strInput = "") {
  const inputLover = strInput.toLowerCase();
  return ![...inputLover].some(
    (str) => inputLover.indexOf(str) !== inputLover.lastIndexOf(str)
  );
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true);

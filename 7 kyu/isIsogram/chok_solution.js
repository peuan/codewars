function isIsogram(strInput = "") {
  const inputLower = strInput.toLowerCase();

  return ![...inputLower].some(
    (str) => inputLower.indexOf(str) !== inputLower.lastIndexOf(str)
  );
}

console.log(isIsogram("Dermatoglyphics"), true);
console.log(isIsogram("isogram"), true);
console.log(isIsogram("aba"), false);
console.log(isIsogram("moOse"), false);
console.log(isIsogram("isIsogram"), false);
console.log(isIsogram(""), true);

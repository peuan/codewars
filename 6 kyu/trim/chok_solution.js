function trim(str = "", size) {
  if (str.length <= size) {
    return str;
  }

  if (size < 4) {
    return `${str.slice(0, size)}...`;
  }

  if (str.length < 4) {
    return `${str}...`;
  }

  return `${str.slice(0, Math.max(size - 3, 1))}...`;
}

// console.log(trim("Creating kata is fun", 14), "Creating ka...");
// console.log(trim("He", 1), "H...");
// console.log(trim("oOZ", 2), "tT");
// console.log(trim("NQpHT Tta", 3), "NQp...");
console.log(trim("xk glOus", 2));
// console.log(trim("Code Wars is pretty rad", 50), "Code Wars is pretty rad");

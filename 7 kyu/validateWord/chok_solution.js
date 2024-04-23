function validateWord(s = "") {
  const counter = s
    .toLowerCase()
    .split("")
    .reduce((previous, current) => {
      previous[current] = (previous[current] || 0) + 1;

      return previous;
    }, {});

  const counts = Object.values(counter);
  const max = Math.max(...counts);

  return counts.every((count) => count === max);
}

console.log(validateWord("abcabc"), true, 'The word was: "abcabc" \n');
console.log(validateWord("Abcabc"), true, 'The word was: "Abcabc" \n');
// console.log(validateWord("abc123"),true, "The word was: \"abc123\" \n");
console.log(validateWord("abcabcd"),false, "The word was: \"abcabcd\" \n");
// console.log(validateWord("abc!abc!"),true, "The word was: \"abc!abc!\" \n");
// console.log(validateWord("abc:abc"),false, "The word was: \"abc:abc\" \n");

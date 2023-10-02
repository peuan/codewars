function wordsToMarks(string = ""){
  return string.split("").map(value => value.charCodeAt() - 96).reduce((acc, value) => acc + value, 0);
}

console.log(
  wordsToMarks("attitude"),
  wordsToMarks("friends"),
);
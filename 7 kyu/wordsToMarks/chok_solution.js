function wordsToMarks(string = '') {
  return [...string].reduce((previous, current) => {
    return previous += (current.charCodeAt() - 96)
  }, 0)
}

console.log(wordsToMarks("attitude"))
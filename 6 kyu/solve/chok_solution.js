function solve(s = "") {
  const numberToConvert = 96;
  return Math.max(...s
    .split(/[aeiou]/g)
    .map((char) => {
        return [...char].reduce((current, previous) => {
            current += previous.charCodeAt() - numberToConvert

            return current
        }, 0)
    }))
}

console.log(solve("zodiac"), 26);
console.log(solve("chruschtschov"), 80);
console.log(solve("khrushchev"), 38);
console.log(solve("strength"), 57);
console.log(solve("catchphrase"), 73);
console.log(solve("twelfthstreet"), 103);
console.log(solve("mischtschenkoana"), 80);
console.log(solve("az"), 26);

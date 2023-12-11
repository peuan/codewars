function whatCentury(year) {
  const suffixFromNumber = {
    1: "st",
    2: "nd",
    3: "rd",
  };
  const exceptions = ["11", "12", "13"];

  const century = Math.ceil(Number(year) / 100).toString();

  if (exceptions.includes(century)) {
    return `${century}th`;
  }

  return `${century}${suffixFromNumber[century[century.length - 1]] || "th"}`;
}

console.log(whatCentury("1999"));
console.log(whatCentury("2011"));
console.log(whatCentury("2154"));
console.log(whatCentury("2259"));
console.log(whatCentury("1234"));
console.log(whatCentury("1023"));
console.log(whatCentury("2000"));

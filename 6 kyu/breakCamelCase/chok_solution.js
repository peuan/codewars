function solution(string = "") {
  return string.replace(/([A-Z])/g, " $1");
}

// console.log(solution(""), "");
// "camel Casing"
console.log(solution("camelCasing"));
// console.log(solution("camelCasingTest"), "camel Casing Test");

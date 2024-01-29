function solution(string = "") {
  const sample = [...string];
  let result = "";
  for (let index = 0; index < sample.length; index++) {
    // capital
    if (sample[index].charCodeAt(0) < 91) {
      result += ` ${sample[index]}`;
    } else {
      result += sample[index];
    }
  }
  return result;
}

// A - Z // 90
// 91
console.log(
  solution("camelCasing"),
);
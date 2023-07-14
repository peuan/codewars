function dontGiveMeFive(start, end) {
  let result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  return result.filter((v) => !String(v).includes(5)).length;
}

console.log(dontGiveMeFive(-2, 0));

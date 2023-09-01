function checkExam(array1: string[], array2: string[]) {
 const score = array1.reduce((sum, curr, index) => {
  if (array2[index] === '') {
    return sum
  } else if (curr === array2[index]) {
    return sum += 4;
  } else {
    return sum -= 1
  }

}, 0);

if (score < 0) {
  return 0;
}

 return score;
}

 console.log(
  checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]), // 6
  checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]), // 7
 );

function checkExam(array1 = [], array2 = []) {
  const totalPoint = array2.reduce((previous, current, currentIndex) => {
    if (!current) {
      return previous;
    }

    if (current === array1[currentIndex]) {
      return (previous += 4);
    } else {
      return (previous -= 1);
    }
  }, 0);

  return Math.max(0, totalPoint);
}

console.log(checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"])); // → 6
console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b", ""])); // → 7
console.log(checkExam(["a", "a", "b", "c"], ["a", "a", "b", "c"])); // → 16
console.log(checkExam(["b", "c", "b", "a"], ["", "a", "a", "c"])); // → 0

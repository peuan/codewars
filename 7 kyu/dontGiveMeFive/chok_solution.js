const dontGiveMeFive = (start, end) => {
  let currentNumber = start;
  return new Array(end - start + 1).fill(0).filter((_, index) => {
    if (index !== 0) {
      currentNumber += 1;
    }

    return !`${currentNumber}`.includes(`5`);
  }).length;
};

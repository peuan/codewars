function doMath(string = "") {
  const numbers = string
    .split(" ")
    .sort((a, b) => {
      const alphabetA = [...a].find(
        (charA) => charA.charCodeAt() >= 97 && charA.charCodeAt() <= 122
      );
      const alphabetB = [...b].find(
        (charB) => charB.charCodeAt() >= 97 && charB.charCodeAt() <= 122
      );

      return alphabetA.charCodeAt() - alphabetB.charCodeAt();
    })
    .map((text) => {
      return Number(text.match(/[0-9]/g).join(""));
    });

  return Math.round(
    numbers.reduce((result, currentNumber, index) => {
      const modIndex = (index + 1) % 4;
      if (modIndex === 2) {
        return result + currentNumber;
      }

      if (modIndex === 3) {
        return result - currentNumber;
      }

      if (modIndex === 0) {
        return result * currentNumber;
      }

      if (modIndex === 1) {
        return result / currentNumber;
      }
    })
  );
}

// console.log(doMath("24z6 1z23 y369 89z 900b", 1299));
// console.log(doMath("24z6 1x23 y369 89a 900b", 1299));
console.log(doMath("10a 90x 14b 78u 45a 7b 34y", 60));
// console.log(doMath("111a 222c 444y 777u 999a 888p", 1459));
// console.log(doMath("1z 2t 3q 5x 6u 8a 7b", 8));

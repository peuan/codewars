/*
 * Question : Divide and Conquer
 *
 * Given a mixed array of number and string representations of integers, add up the non-string integers and subtract the total of the string integers.
 * Return as a number.
*/

function divCon (x) {
  const num = [];
  const nonNum = [];

  if (!x.length) {
    return;
  }

  x.forEach(n => {
    if (typeof n === 'number') {
      num.push(n);
    } else if (typeof n === 'string') {
      nonNum.push(Number(n));
    }
  })

  const totalNum = num.reduce((a, b) => a + b, 0);
  const totalNonNum = nonNum.reduce((a, b) => a + b, 0);

  console.log({
    totalNum,
    totalNonNum
  });

  return totalNum - totalNonNum;
}

// 2, 14, 13
console.log(
  divCon([9, 3, '7', '3']),
  divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]),
  divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2, '0']),
)

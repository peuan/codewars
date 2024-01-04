function generateElement(number = "") {
  if (!number.length) {
    return null;
  }
  number
  // '11121519'
  // '311211151119'

  const numArr = number.split('');
  numArr
  let prev;
  prev
  const result = numArr.reduce((acc, curr) => {
    curr
    acc
    // Not the same number
    if (prev !== curr) {
      const newNum = {
        char: curr,
        count: 1,
      }
      acc.push(newNum);
      prev = curr;
    } else {
      // const sameNum = acc.find((obj) => obj.char === curr)
      // const sameNum = acc[-1];
      // sameNum
      // const sameObj = {
      //   ...acc[acc.length-1],
      // }
      // sameObj
      const lastObj = {
        char: curr,
        count: acc[acc.length-1].count,
      }
      acc = acc.slice(1, -1).push(lastObj)
      acc
    }
    acc
    return acc;
  }, []);

  const result2 = result.reduce((acc, curr, index) => {
    if (curr) {
      acc.push(`${curr}${index + 1}`);
    }
    acc
    return acc;
  }, []);


  return result2.join('')
}

function lookAndSay(data = '', len = 1){
  // Populate result list with the look and say numbers
  // data:  starting number set
  // len:   sequence length

  // "-" --> 1
  // qty | unit
  // "one one" --> 11
  // "two one(s)" --> 21
  // qty | unit | qty | unit
  // "one two one one" --> 1211
  // "one one one two two one(s)" --> 111221

  const arr = [data];
  for (let index = 0; index < len; index++) {
    const heck = arr[index];
    heck
    const element = generateElement(heck);
    element
    arr.push(element)
    
  }

  return arr.slice(1);
}

// ['11','21','1211','111221','312211']
// ['11121519', '311211151119', '13211231153119', '1113122112132115132119', '31131122211211131221151113122119']
console.log(
  lookAndSay('11121519', 1),
);

// console.log(
//   "4545".split('')
// );
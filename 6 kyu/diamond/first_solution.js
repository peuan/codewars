function addSpace(str = "", max = 0){
  const length = str.length;
  const num = max - length;
  const space = " ";
  return `${space.repeat(num / 2)}${str}`
}

function diamond(n){
  if (n % 2 === 0 || n < 0) {
    return null;
  }

  const middle = Math.round(n/2);
  const star = "*";
  let result = "";
  let counter = 1;

  for (let index = 1; index < n + 1; index++) {
    let addition;
    console.log(counter);
    if (middle === index) {
      // reach a halfway
      console.log(index);
      addition = star.repeat(counter);
    } else if (middle < index) {
      // first part
      counter -= 2;
      console.log(index);
      addition = addSpace(star.repeat(index === n ? 1 : counter), n);
    } else {
      // last part
      console.log(index);
      addition = addSpace(star.repeat(index === 1 ? 1 : counter), n);
      counter += 2;
    }
    result = `${result}${addition}\n`;
  }
  return result;
}

console.log(
  diamond(7),
);

console.log(
  addSpace("*", 3),
  // "'   *   '"
);

console.log(" *\n***\n *\n");

console.log("  *\n ***\n*****\n ***\n  *\n");

console.log(Math.round(3/2));

// #1
// i = 0
// _ * _

// #2
// i = 1
// ***

// #3
// i = 2
// _ * _
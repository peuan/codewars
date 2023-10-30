// function twoOldestAges(ages = []) {
//   return ages
//     .sort((a, b) => b - a)
//     .slice(0, 2)
//     .reverse();
// }

function twoOldestAges(ages = []) {
  let number1 = Math.max(ages[0], ages[1]);
  let number2 = Math.min(ages[0], ages[1]);

  for (let index = 2; index < ages.length; index++) {
    const max = Math.max(ages[index], number1, number2);

    if (max === ages[index]) {
      number2 = number1;
      number1 = max;
    } else if (ages[index] > number2) {
      number2 = ages[index];
    }
  }

  return [number2, number1];
}

console.log(twoOldestAges([32, 47]));

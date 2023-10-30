function twoOldestAges(ages = []){
  return ages.sort((a, b) => a - b).slice(-2);
}
console.log(
  twoOldestAges([1,5,87,45,8,8]),
);
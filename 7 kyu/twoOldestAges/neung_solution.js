function twoOldestAges(ages) {
  let max1st = ages[0];
  let max2nd = ages[1];
  for (let i = 2; i < ages.length; i++) {
    let age = ages[i];
    if (age > max1st) {
      if (max1st < max2nd) {
        max1st = age;  
      } else {
        max2nd = age;
      }
    } else if (age > max2nd){
      max2nd = age;
    }
  }
  let result = [];
  if (max1st > max2nd) {
    result = [max2nd, max1st];
  } else {
    result = [max1st, max2nd];  
  }
  return result;
}
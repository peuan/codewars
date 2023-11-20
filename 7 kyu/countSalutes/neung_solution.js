function countSalutes(hallway) {
  let count = [];
  for (let h of hallway) {
    if (h === '>') {
      count.push(0);
    } else if (h === '<') {
      for (let i=0; i<count.length; i++) {
        count[i]++;
      }  
    }
  }
  let result = 0;
  for (let c of count) {
    result += (c * 2);
  }
  return result;
}
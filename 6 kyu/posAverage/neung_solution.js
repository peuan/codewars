function posAverage(s) {
  let totalComparePosition = 0;
  let totalCommonPosition = 0;
  let items = s.split(",");
  for(let i=0; i<items.length; i++){
    for(let j=i+1; j<items.length; j++){
      totalComparePosition += items[i].trim().length;
      totalCommonPosition += countCommonPositions(items[i].trim(), items[j].trim());
    }  
  }
  return ((totalCommonPosition / totalComparePosition) * 100.00).toPrecision(12);
}

function countCommonPositions(s1,s2){
  let result = 0;
  for(let i=0; i<s1.length; i++){
    if(s1[i] == s2[i]){
      result++;
    }    
  }
  return result;
}
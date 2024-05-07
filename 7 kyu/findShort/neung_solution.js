function findShort(s){
  let result = 0;
  for(var item of s.split(" ")){
    if(result === 0 || item.length < result){
      result = item.length;
    }
  }
  return result;
}
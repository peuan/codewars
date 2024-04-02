function validateWord(s)
{
  let map = {};
  for(let c of s){
    let key = c.toLowerCase();
    if(map[key]){
      map[key] = map[key] + 1;
    }else{
      map[key] = 1;
    }
  }
  let expected = -1;
  for(let k in map){
    if(expected === -1){
      expected = map[k];
    }else if(expected != map[k]){
      return false;
    }
  }
  return true;
}
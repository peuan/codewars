// write the function isAnagram
var isAnagram = function(test, original) {
  let m1 = toMap(test);
  let m2 = toMap(original);
  if(Object.keys(m1).length != Object.keys(m2).length){
    return false;
  }
  for(let k in m1) {
    if(m1[k] != m2[k]){
      return false;
    }
  }
  return true;
};

function toMap(input){
  let result = {};
  for(let c of input){
    let key = c.toLowerCase();
    if(result[key] === undefined){
      result[key] = 1;
    }else{
      result[key]++;
    }
  }
  return result;
}
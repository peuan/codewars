function getCellAddresses(range) {
  
  let items = range.split(':');
  if(items[0] === items[1]){
    return [];
  }
  
  let fromChar = items[0].charCodeAt(0);
  let fromNumber = parseInt(items[0].substring(1));
  let toChar = items[1].charCodeAt(0);
  let toNumber = parseInt(items[1].substring(1));
  let result = [];
  for(let n = fromNumber; n <= toNumber; n++){
    for(let ch = fromChar; ch <= toChar; ch++){
      result.push(String.fromCharCode(ch) + n);
    }
  }
  return result;
}
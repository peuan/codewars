function doMath(string) {
    let sortedNumbers = [];
    let items = sortByChar(string.split(" "));
    for(let item of items){
      sortedNumbers.push(convertNumber(item));
    }
    let result = sortedNumbers[0];
    let countOp = 0;
    for(let i=1; i<sortedNumbers.length; i++){
      let op = countOp % 4;
      if(op === 0){
        result += sortedNumbers[i];
      }else if(op === 1){
        result -= sortedNumbers[i];
      }else if(op === 2){
        result *= sortedNumbers[i];
      }else if(op === 3){
        result /= sortedNumbers[i];
      }
      countOp++;
    }
    return Math.round(result);
}

function sortByChar(items){
  console.log("input items: " + items);
  let result = [];
  for(let index = 0; index < items.length; index++){
    let item = items[index];
    let prefix = '';
    let postfix = '';
    for(let i=0; i<item.length; i++){
       let c = item[i];
       if('0123456789'.includes(c)){
         postfix += c;
       } else {
         prefix += c + formatIndex(index, items.length) + '#';
       }
    }
    result.push(prefix + postfix);
  }
  console.log("before sort: " + result);
  result.sort();
  console.log(" after sort: " + result);
  return result;
}

function formatIndex(index, length){
  let numberOf0 = String(length).length - String(index).length;
  if(numberOf0 > 0){
    return "0".repeat(numberOf0) + String(index);  
  }
  return String(index);
}

function convertNumber(input){
  let result = input.split("#")[1];
  return Number(result);
}
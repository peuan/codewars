function lookAndSay(data,len){
  // Populate result list with the look and say numbers
  // data:  starting number set
  // len:   sequence length
  let result = [sayWhatYouSee(data)];
  for (let i=1; i<len; i++) {
    let previous = result[result.length - 1];
    result.push(sayWhatYouSee(previous));
  }
  return result;
}

function sayWhatYouSee(data){
  let result = "";
  let count = 1;
  let c = data[0];
  for (let i=1; i<data.length; i++) {
      if (c === data[i]) {
        count++;
      } else {
        result += (count + c);
        c = data[i];
        count = 1;
      }
  }
  result += (count + c);
  return result;
}
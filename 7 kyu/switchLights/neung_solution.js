function switchLights(a) {
  let result = a.slice();
  for (let i=0; i<result.length; i++){
    if(result[i] === 1){
      flip(result, i);
    }
  }
  return result;
}

function flip(input, lastIndex){
  for (let i=0; i<=lastIndex; i++) {
    if(input[i] === 1){
      input[i] = 0;
    } else {
      input[i] = 1;
    }
  }
}
function encode(plaintext){
  let result = '';
  let items = plaintext.split(' ');
  for(let item of items){
    if(item === '') {
      result += ' ';
    }else{
      result += reverse(item.substr(0, item.length - 1)) + 
              item.substr(item.length - 1, item.length) + ' '; 
    }
  }
  return result.substr(0, result.length - 1);
}

function reverse(input){
  let result = '';
  for(let i = input.length - 1; i >= 0; i--){
    result += input[i];
  }
  return result;
}
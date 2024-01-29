function solution(string) {
  let result = "";
  for(let c of string){
    if(c === c.toUpperCase()){
      result += " ";
    }
    result += c;
  }
  return result;
}
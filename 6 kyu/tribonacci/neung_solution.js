function tribonacci(signature,n){
  if (n <= 0) 
    return [];
  let result = JSON.parse(JSON.stringify(signature));
  while (result.length < n) {
    let lastIndex = result.length - 1;
    let sum = result[lastIndex - 2] + result[lastIndex - 1] + result[lastIndex];
    result.push(sum);  
  }
  return result.slice(0, n);
}
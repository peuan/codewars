function Xbonacci(signature,n){
  let result = signature.slice();
  let lastN = signature.length;
  while (result.length < n) {
    let sum = sumLast(lastN, result);
    result.push(sum);
  }
  return result.slice(0, n);
}

function sumLast(n, input){
  let sum = 0;
  for (let i=0; i<n; i++) {
    let index = input.length - n + i;
    sum += input[index];
  }
  return sum;
}
function breakChocolate(n = 0, m = 0) {
  if (n < 1 || m < 1) {
    return 0;
  }
  return ((n-1)*m)+(m-1);
}

console.log(
  breakChocolate(1,1),
  breakChocolate(2,2),
  breakChocolate(5,1),
  breakChocolate(2,4),
  breakChocolate(5,5),
);
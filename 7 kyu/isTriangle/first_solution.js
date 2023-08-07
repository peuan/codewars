function isTriangle(a,b,c) {
   const proof1 = a + b > c;
   const proof2 = b + c > a;
   const proof3 = a + c > b;

   return proof1 && proof2 && proof3;
}

console.log(
  isTriangle(3,4,5),
  isTriangle(1,2,2),
  isTriangle(1,2,2),
);
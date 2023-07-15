function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  const isCorrectCode = enteredCode === correctCode;
  const isFine = Date.parse(currentDate) <= Date.parse(expirationDate);

  return isFine && isCorrectCode;
}

console.log(
  checkCoupon('123','123','September 5, 2014','October 1, 2014'),
  checkCoupon('123a','123','September 5, 2014','October 1, 2014'),
);
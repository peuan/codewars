function checkCoupon(enteredCode, correctCode, currentDate, expirationDate) {
  return (
    enteredCode === correctCode &&
    new Date(currentDate) <= new Date(expirationDate)
  );
}
console.log(checkCoupon("123", "123", "July 9, 2015", "July 9, 2015"));

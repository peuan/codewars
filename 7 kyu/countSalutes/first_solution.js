function countSalutes(hallway = '') {
  const left = ">";
  const right = "<";
  let leftPeople = 0;
  let rightPeople = 0;
  let contacts = 0;
  const leftArr = []

  const hasContact = hallway.split('').includes(left || right);
  hasContact
  if (!hasContact) {
    return 0;
  }

  const cleanHallway = hallway.split('').filter(person => (person === left) || (person === right));
  cleanHallway

  // const leftArr2 = cleanHallway.filter((person, index) => person === left && (index !== cleanHallway.length - 1));

  for (let i = 0; i < cleanHallway.length; i++) {
    contacts
    leftPeople
    rightPeople
    if (cleanHallway[i] === left && (i !== cleanHallway.length - 1)) {
      leftPeople++;
      leftArr.push(left);
    } else if (cleanHallway[i] === right && leftPeople) {
      rightPeople++;
    }

    contacts
    leftPeople
    rightPeople
  }
  leftPeople
  rightPeople
  contacts = leftPeople * rightPeople;
  contacts
  return contacts * 2;
}
// 6
console.log(
  // countSalutes('>----->-----<--<'),
  // countSalutes('<---->---<---<-->'),
  countSalutes('>< >< >'), //6
  // countSalutes('>>>>>>>>>>>>>>>>>>>>>----<->'),
);

// let a = 2;
// a+=2
// console.log(
// a
// );
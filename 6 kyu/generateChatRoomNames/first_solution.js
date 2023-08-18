function generateChatRoomNames(users) {
  console.log(users);
  const [...persons] = users.map(user => {
    const  [firstname, lastname] = user.split(' ');
    return {
      firstname,
      lastname
    }
  });
  console.log(persons);

  const convert = (name = "") => name.split(' ').map(name => name[0].toUpperCase() + name.slice(1).toLowerCase()).join(' ');

  const result = [];

  for (let i = 0; i < persons.length + 1; i++) {
    console.log({
      a: persons[i],
      b: persons[i+1],
    });
    if (persons.length === 1) {
      result.push(`${persons[i].firstname}`)
      break;
    }

    if (persons[i].firstname === persons[i+1].firstname) {
      if (persons[i].lastname[0] === persons[i+1].lastname[0]) {
        result.push(convert(`${persons[i].firstname} ${persons[i].lastname}`))
        result.push(convert(`${persons[i+1].firstname} ${persons[i+1].lastname}`))
        break;
      }
      result.push(convert(`${persons[i].firstname} ${persons[i].lastname[0]}`))
      result.push(convert(`${persons[i+1].firstname} ${persons[i+1].lastname[0]}`))
      break;
    }
    result.push(convert(`${persons[i].firstname}`))
    result.push(convert(`${persons[i+1].firstname}`))
    break;
  }
  return result;
}

console.log(
  // generateChatRoomNames(["Joe Bloggs"]), // ["Joe"]
  // generateChatRoomNames(["Joe Bloggs", "John Smith"]), // ["Joe", "John"]
  generateChatRoomNames(["John Bloggs", "John Smith"]), // ["John B", "John S"]
  // generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe"]), // ["Joe", "John", "Jane"]
);

const x = "Joe Bloggs".split(' ')
console.log(
  x
);
const toFirstLatter = (s) => {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
};

function generateChatRoomNames(users = [""]) {
  const names = {};
  users.forEach((user) => {
    const [firstName, lastName] = user.split(" ");
    const newFirstname = toFirstLatter(firstName);
    const newLastname = toFirstLatter(lastName);
    if (names[newFirstname]) {
      names[newFirstname].push(newLastname);
    } else {
      names[newFirstname] = [newLastname];
    }
  });

  return Object.entries(names)
    .map(([name, lastNames]) => {
      if (lastNames.length === 1) {
        return name;
      }

      const startCharacters = {};

      lastNames.forEach((lastName) => {
        if (startCharacters[lastName[0]]) {
          startCharacters[lastName[0]].push(lastName);
        } else {
          startCharacters[lastName[0]] = [lastName];
        }
      });

      return Object.values(startCharacters).map((values) => {
        if (values.length > 1) {
          return values.map((value) => `${name} ${value}`);
        }

        return `${name} ${values[0][0]}`;
      });
    })
    .flat(2)
    .sort();
}

const names = [
  "Aiden Gonzalez",
  "Aiden Jackson",
  "Aiden Johnson",
  "Aiden Smith",
  "Ava B",
  "Ava T",
];
const expectedResult = [
  "Aiden G",
  "Aiden Jackson",
  "Aiden Johnson",
  "Aiden S",
  "Ava B",
  "Ava T",
];
console.log(generateChatRoomNames(names));

// console.log(
//   generateChatRoomNames(["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs"])
// );
// // ["Jane B", "Jane D", "Joe", "John"]

// const names = ["Joe Bloggs", "John Smith", "Jane Doe", "Jane Bloggs", "John Scott"];
// console.log(
//     generateChatRoomNames(names)
//   );
// const expectedResult = ["Jane B", "Jane D", "Joe", "John Scott", "John Smith"];

const reOrderCharacter = (word) => {
  return word.toLowerCase().split("").sort().join();
};

const isAnagram = (test = "", original = "") => {
  return reOrderCharacter(test) === reOrderCharacter(original);
};

console.log(isAnagram("foefet", "toffee"));

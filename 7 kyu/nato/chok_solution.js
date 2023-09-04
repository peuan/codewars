function nato(word) {
  const codes = {
    A: "Alpha",
    B: "Bravo",
    C: "Charlie",
    D: "Delta",
    E: "Echo",
    F: "Foxtrot",
    G: "Golf",
    H: "Hotel",
    I: "India",
    J: "Juliett",
    K: "Kilo",
    L: "Lima",
    M: "Mike",
    N: "November",
    O: "Oscar",
    P: "Papa",
    Q: "Quebec",
    R: "Romeo",
    S: "Sierra",
    T: "Tango",
    U: "Uniform",
    V: "Victor",
    W: "Whiskey",
    X: "X-ray",
    Y: "Yankee",
    Z: "Zulu",
  };

  return [...word].map((codeKey) => codes[codeKey.toUpperCase()]).join(" ");
}

console.log(nato("hi"), "Hotel India");
console.log("abc", "Alpha Bravo Charlie");
console.log("babble", "Bravo Alpha Bravo Bravo Lima Echo");
console.log("Banana", "Bravo Alpha November Alpha November Alpha");

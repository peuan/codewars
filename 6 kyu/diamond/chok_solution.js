function diamond(n = 0) {
  if (n % 2 === 0 || n < 0) {
    return null;
  }

  let top = "";
  let center = "";
  let bottom = "";

  for (let i = 1; i <= n; i += 2) {
    const space = " ".repeat(Math.round(n - i) / 2);
    const star = "*".repeat(i);

    if (i === n) {
      center = `${star}\n`;
    } else {
      top += `${space}${star}\n`;
      bottom += `\n${star}${space}`;
    }
  }

  return `${top}${center}${[...bottom].reverse().join("")}`;
}

console.log(diamond(7));
// it("Valid diamonds", () => {
//     assert.strictEqual(diamond(1), "*\n")
//     assert.strictEqual(diamond(3), " *\n***\n *\n")
//     assert.strictEqual(diamond(5), "  *\n ***\n*****\n ***\n  *\n")
//   });

//   it("Invalid diamonds", () => {
//     assert.strictEqual(diamond(2), null)
//     assert.strictEqual(diamond(-3), null)
//     assert.strictEqual(diamond(0), null)
//   });

console.log("   *\n  ***\n *****\n*******\n *****\n  ***\n   *\n")
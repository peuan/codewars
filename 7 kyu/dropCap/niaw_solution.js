function dropCap(n) {
  return n
    .split(" ")
    .map((item) =>
      item.length > 2
        ? item.slice(0, 1).toUpperCase() + item.slice(1).toLowerCase()
        : item
    ).join` `
}

console.log(dropCap("apple of banana"))

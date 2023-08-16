function order(words) {
  return words.split` `.sort((a, b) => a.match(/\d/g)[0] - b.match(/\d/g)[0])
    .join` `
}

console.log(order("is2 Thi1s T4est 3a"))

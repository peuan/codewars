function order(words){
  return words.split(' ').sort((a, b) => {
    return a.match(/[1-9]/g)[0] - b.match(/[1-9]/g)[0]
  }).join(' ');
}

console.log(
  order("is2 Thi1s T4est 3a")
);
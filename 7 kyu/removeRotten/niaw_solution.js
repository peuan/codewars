function removeRotten(bagOfFruits) {
  if (!bagOfFruits) {
    return []
  }
  return bagOfFruits
    .map((fruit) => {
      return fruit.replace("rotten", "")
    })
    .map((fruit) => {
      return fruit.toLowerCase()
    })
}

console.log(removeRotten(["apple", "rottenBanana", "kiwi", "melone", "orange"]))

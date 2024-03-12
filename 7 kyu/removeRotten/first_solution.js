function removeRotten(bagOfFruits){
  if (!bagOfFruits?.length) {
    return [];
  }
  return bagOfFruits.map((item) => {
    if (!item.includes('rotten')) {
      return item;
    }
    const removed = item.slice(6);
    removed
    return `${removed[0].toLowerCase()}${removed.slice(1)}`;
  })
}

console.log(
  removeRotten(["apple","rottenBanana","kiwi","melone","orange"])
);
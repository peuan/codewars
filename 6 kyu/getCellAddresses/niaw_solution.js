function getCellAddresses(range) {
  let rangeArray = range.split(":")
  let startCell = rangeArray[0]
  let endCell = rangeArray[1]
  if (
    rangeArray.length < 2 ||
    rangeArray[0] === rangeArray[1] ||
    startCell[0].charCodeAt() > endCell[0].charCodeAt()
  ) {
    return []
  }
  let result = []
  for (var j = +startCell.slice(1); j <= +endCell.slice(1); j++) {
    for (
      var i = startCell[0].charCodeAt();
      i <= endCell.slice().charCodeAt();
      i++
    ) {
      result.push(String.fromCharCode(i) + j)
    }
  }
  return result
}

console.log(getCellAddresses("B1:H5"))

function removeSmallest(numbers) {
  var result = []
  for (var i = 0; i < numbers.length; i++) {
    if (i !== numbers.indexOf(Math.min(...numbers))) {
      result.push(numbers[i])
    }
  }
  return result
}

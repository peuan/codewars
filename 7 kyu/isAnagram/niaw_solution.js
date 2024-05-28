var isAnagram = function (test, original) {
  const splitTest = [...test]
    .map((item) => item.toLowerCase())
    .sort((a, b) => a.localeCompare(b))
  const splitOriginal = [...original]
    .map((item) => item.toLowerCase())
    .sort((a, b) => a.localeCompare(b))

  return (
    splitTest.every((x, i) => x === splitOriginal[i]) &&
    splitTest.length === splitOriginal.length
  )
}

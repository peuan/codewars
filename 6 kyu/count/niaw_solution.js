function count(string) {
  console.log(string)
  return [...string].reduce((acc, curr) => {
    return acc[curr] ? { ...acc, [curr]: acc[curr] + 1 } : { ...acc, [curr]: 1 }
  }, {})
}

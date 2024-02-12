function switchLights(a) {
  let result = a
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== 0) {
      result = [
        ...result.slice(0, i + 1).map((item) => (item ? 0 : 1)),
        ...a.slice(i + 1),
      ]
    }
  }
  return result
}
// ;[0, 1, 0, 1, 0].
console.log(switchLights([1, 1, 1, 1, 1]))

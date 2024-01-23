function Xbonacci(signature = [], n) {
  let results = [...signature]
  for (var i = signature.length; i < n; i++) {
    const sum = results
      .slice(-signature.length)
      .reduce((pre, curr) => pre + curr, 0)

    results.push(sum)
  }
  return results.slice(0, n)
}

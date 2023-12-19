function lookAndSay(data, len) {
  const result = [data]

  for (let i = 0; i < len; i++) {
    result.push(mapLookAndSay(result[i]))
  }
  return result.slice(1)
}

function mapLookAndSay(char) {
  let count = 1
  let result = ""

  for (let i = 0; i < char.length; i++) {
    if (i === char.length - 1 || char[i] !== char[i + 1]) {
      result += count + char[i]
      count = 1
    } else {
      count++
    }
  }

  return result
}

console.log(lookAndSay("1", 5))

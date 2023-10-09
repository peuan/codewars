function encode(plaintext) {
  return plaintext
    .split(" ")
    .map((item) => {
      const re = [...item].reverse().join("")
      return re.slice(1) + re.slice(0, 1)
    })
    .join(" ")
}

function trim(str, size) {
  if (size >= str.length) return str

  if (size <= 3) return str.substring(0, size) + "..."

  if (str.length <= size) return str.substring(0, size) + "..."

  if (size < str.length) {
    return str.substring(0, size - 3) + "..."
  }
  if (str.length > size) {
    return str
  }
}
console.log(trim("hellooooooooooooo", 5))

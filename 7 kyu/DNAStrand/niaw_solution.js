function DNAStrand(dna) {
  var result = ""
  for (var i = 0; i < [...dna].length; i++) {
    switch (dna[i]) {
      case "A":
        result += "T"
        break
      case "T":
        result += "A"
        break
      case "C":
        result += "G"
        break
      case "G":
        result += "C"
        break
      default:
        break
    }
  }
  return result
}
console.log(DNAStrand("ATTGC"))

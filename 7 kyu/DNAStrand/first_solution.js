function DNAStrand(dna = ""){
  return dna?.split("")?.reduce((acc, curr) => {
    switch (curr) {
      case "A":
        acc.push("T")
        break;
      case "T":
        acc.push("A")
        break;
      case "G":
        acc.push("C")
        break;
      case "C":
        acc.push("G")
        break;
      default:
        break;
    }
    return acc;
  }, [])?.join("")
}
console.log(
  DNAStrand("AAAA"),
  DNAStrand("ATTGC"),
  DNAStrand("AAGTATAA"),
);
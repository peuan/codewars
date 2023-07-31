const mapper = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function DNAStrand(dna) {
  return [...dna].map((v) => mapper[v]).join("");
}

console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");

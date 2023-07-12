function accum(s = "") {
  return  [...s.toUpperCase()].map((char, index) => Array.from({ length: index+1 }, (v, i) => i === 0 ? char : char.toLowerCase()).join("")).join("-");
}

console.log(
  accum("AbC"),
  accum("ZpglnRxqenU"),
  accum("NyffsGeyylB"),
  accum("MjtkuBovqrU"),
  accum("EvidjUnokmM"),
  accum("HbideVbxncC"),
);
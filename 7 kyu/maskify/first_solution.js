function maskify(cc = "") {
  if (cc.length <= 4) {
    return cc;
  }

  const symbol = '#';
  const unmasked = cc?.slice(-4);
  const maskNum = cc?.slice(0, -4).length;

  return symbol.repeat(maskNum) + unmasked;
}

console.log(
  maskify("4556364607935616"),
  maskify("64607935616"),
  maskify("4454"),
  maskify("1"),
);
function divCon(x) {
  const n = x
    .filter((v) => typeof v === "number")
    .reduce((p, c) => (p += c), 0);
  const s = x.filter((v) => typeof v === "string").reduce((p, c) => +p + +c, 0);
  return n - s;
}

function openOrSenior(data) {
  return data.map((v) => (v[0] >= 55 && v[1] > 7 ? "Senior" : "Open"));
}

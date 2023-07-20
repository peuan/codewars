function printerError(s = "") {
  const chars = "abcdefghijklmnopqrstuvwxyz"; // 13

  let err = 0;
  const isError = (v) => chars.indexOf(v) > 12;
  for (const char of s) {
    if (isError(char)) {
      err++;
    }
  }

  return `${err}/${s.length}`
}

console.log(
  printerError('aabbbbuxymz'),
  printerError('aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz'),
);
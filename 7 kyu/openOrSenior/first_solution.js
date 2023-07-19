function openOrSenior(data = []){
  const result = [];
  const isSenior = (v) => v[0] >= 55 && v[1] > 7;
  data.forEach(member => isSenior(member) ? result.push('Senior') : result.push('Open'));
  return result;
}

console.log(
  openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),
);

// ['Open', 'Senior', 'Open', 'Senior']
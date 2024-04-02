function validateWord(s = "")
{
  const arr = [...s.toLowerCase()];
  const obj = arr.reduce((acc, curr) => {
    const obj = {
      ...acc,
      [curr]: acc[curr] ? acc[curr] + 1 : 1,
    }
    return obj
  }, {});

  const iniValue = Object.values(obj)?.[0];
  for (const [_key, value] of Object.entries(obj)) {
    if (iniValue !== value) {
      return false;
    }
  }
  return true
}

console.log(
  // validateWord('abcabcd'),
  validateWord('abc!abc!')
);
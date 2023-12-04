function getChars(start = "", end = "") {
  const charCode1 = start.charCodeAt(0);
  const charCode2 = end.charCodeAt(0);
  return Array.from({length: charCode2 - charCode1 + 1}, (_v, i) => String.fromCharCode(charCode1 + i) )
}

function getCellAddresses(range = "") {
  const [start, end] = range.split(':');

  if (start === end) {
    return [];
  }
  const chars = getChars(start, end);
  const startNum = Number(start.slice(1));
  const nums = Array.from({length: Number(end.slice(1)) - Number(start.slice(1)) + 1 }, (_v, i) => startNum + i);

  const result = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < chars.length; j++) {
      result.push(chars[j] + nums[i])
    };
  };

  return result;
}

console.log(
  getCellAddresses("A1:H4")
);

function lookAndSay(data, len) {
  const results = [data];
  let count = 1;

  for (let index = 0; index < len; index++) {
    const currentSayNumber = results[index];
    let nextSayNumber = "";

    for (let j = 0; j < currentSayNumber.length; j++) {
      const currentNumber = currentSayNumber[j];
      const nextNumber = currentSayNumber[j + 1];
      
      if (nextNumber !== currentNumber) {
          nextSayNumber += `${count}${currentNumber}`;
          count = 1;
        } else {
          count += 1;
      }
    }

    results.push(nextSayNumber);
  }

  results.shift()
  return results;
}

console.log(lookAndSay("1", 5));

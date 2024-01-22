function lookAndSay(data, len) {
  const results = [data];
  let count = 1;

  for (let index = 0; index < len; index++) {
    const currentSayNumber = results[index];
    let nextSayNumber = "";

    for (let j = 0; j < currentSayNumber.length; j++) {
      const currentChar = currentSayNumber[j];
      const nextChar = currentSayNumber[j + 1];
      
      if (nextChar !== currentChar) {
          nextSayNumber += `${count}${currentChar}`;
          count = 1;
        } else {
          count += 1;
      }
    }

    results.push(nextSayNumber);
  }

  console.log(results)

  results.shift()
  return results;
}

console.log(lookAndSay("1", 5));

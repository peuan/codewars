function loneliest(str: string): string[] {
  const splitArray = str.split('');
  splitArray
  let highest = 0;
  const temp = []
  for (let i = 0; i < splitArray.length; i++) {
    highest
    if (splitArray[i] === ' ') {
      highest++;
    } else {
      temp.push(highest);
      highest = 0;
      temp.push(splitArray[i]);
    }
  }

  temp
  const result = temp.filter((value) => typeof value === 'number');
  result

  const z = result.filter(Boolean);
  z
  if (!result.filter(Boolean).length) {
    return splitArray.filter(v => v !== ' ').filter((v, i) =>result.includes(i));
  }

  const ok = result.reduce((first, value, index) => {
    const newScore = result[index] + result[index + 1];
    newScore
    if (newScore >= first.maxScore && index !== 0) {
      first.maxScore = newScore;
      first.targetIndex.push(index);
    }
    first
    return first;
  }, {
    maxScore: 0,
    targetIndex: [],
  });
  ok
  return splitArray.filter(v => v !== ' ').filter((v, i) => ok.targetIndex.includes(i));
}

console.log(
  // loneliest('abc d   ef  g   h i j      '), // ['g']
  // loneliest('a   b   c '), // ['b']
  // loneliest('  abc  d  z    f gk s '), // ['z']
  // loneliest('a  b  c  de  '), // ['b', 'c']
  loneliest('abc'), // ['a', 'b', 'c']
);

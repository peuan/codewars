function removeSmallest(numbers) {
  let found = false;
  const lowest = Math.min(...numbers);

  return numbers.reduce((acc, number) => {
    if ( number === lowest && !found ) {
      found = true
      return acc;
    }
    acc.push(number);
    return acc;
  }, []);
}

console.log(
  removeSmallest([5, 3, 2, 1, 4]),
  removeSmallest([2, 2, 1, 2, 1]),
);
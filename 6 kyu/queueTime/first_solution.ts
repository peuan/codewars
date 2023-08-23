function queueTime(customers: number[], n: number): number {
  if (n === 1) {
    return customers.reduce((acc, curr) => acc + curr, 0);
  }

  if (n > customers.length) {
    return Math.max(...customers);
  }

      // [[10, 2], [8], [8, 3], [5, 0]]
  let counter = customers.length;
  let customQueue = Array.from({length: n}, (v, i) => customers[i]);
  console.log(customQueue);

  while (counter > 1) {
    // console.log('customers');
    const timeToWait = Math.min(...customQueue);
    console.log(timeToWait);

    customQueue = customQueue.map(v => {
      v
      if ((v - timeToWait) === 0) {
        return;
      }

      return v - timeToWait;
    })

    counter--;
  }
  console.log(customQueue);
}

console.log(
  // queueTime([], 1),
  // queueTime([1,2,3,4], 1),
  // queueTime([2,2,3,3,4,4], 2), // 9
  // queueTime([1,2,3,4,5], 100), // 5
  // queueTime([5,3,4], 1), // 12
  queueTime([10,2,3,3], 2), // 10
  // queueTime([2,3,10,2], 2), // 12
);
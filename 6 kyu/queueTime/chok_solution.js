function queueTime(customers, n) {
  const tills = Array(n).fill(0);
  let tempTills = [...tills];
  const queues = [...customers];
  let totalTime = 0;

  while (queues.length >= 1) {
    const availableTill = tempTills.reduce((previous, current) => {
      if (current === 0) {
        return previous + 1;
      }
      return previous;
    }, 0);

    const tempQueues = queues.slice(0, availableTill);

    if (availableTill === 0 && queues.length > 0) {
      tempTills = tempTills
        .map((tempTill) => {
          return tempTill - 1;
        })
        .sort();

      totalTime++;
    } else {
      if (queues.length > availableTill) {
        tempTills = tempTills
          .map((tempTill, index) => {
            if (tempQueues[index]) {
              return tempQueues[index] + tempTill - 1;
            }

            return tempTill - 1;
          })
          .sort();

        totalTime++;
      } else {
        totalTime += Math.max(...tempTills, ...queues);
      }
      queues.splice(0, availableTill);
    }
  }

  return totalTime;
}

// console.log(queueTime([], 1), 0);
console.log(queueTime([1, 2, 3, 4], 1), 10);
console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
console.log(queueTime([10, 2, 3, 3], 2), 10);
console.log(queueTime([1, 2, 3, 4, 5], 100), 5);
console.log(
  queueTime(
    [
      49, 1, 17, 7, 30, 22, 2, 13, 25, 1, 48, 16, 10, 42, 47, 16, 23, 25, 26,
      10, 24, 17, 43, 45,
    ],
    5
  )
);

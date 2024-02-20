function alphabet(ns = []) {
  const sorted = ns.sort((a, b) => a - b);
  sorted
  const reduced = [...new Set(sorted)];
  reduced

  const CxD = reduced[reduced.length-1];
  const B = reduced[1];

  const C = reduced.find((item) => {
    return (item > B) && !(CxD % item) && (reduced.includes(item * B)) ? true : false;
  })

  return (CxD / C);
}

console.log(
  // alphabet([2,3,4,1,12,6,2,4]),
  alphabet([7,96,8,240,12,140,20,56]),
);
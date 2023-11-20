function countSalutes(hallway = "") {
  const totalMet = [...hallway].reduce((totalMet, currentWay, currentIndex) => {
    if (currentWay === ">") {
      const canMeet = [...hallway].filter((way, wayIndex) => {
        return way === "<" && currentIndex < wayIndex;
      }).length;

      return totalMet + canMeet;
    }

    return totalMet;
  }, 0);

  return totalMet * 2;
}

console.log(countSalutes("<---->---<---<-->"), 4);
console.log(countSalutes("------"), 0);
console.log(countSalutes(">>>>>>>>>>>>>>>>>>>>>----<->"), 42);
console.log(countSalutes("<<----<>---<"), 2);
console.log(countSalutes(">"), 0);

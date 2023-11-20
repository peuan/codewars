function countSalutes(hallway = "") {
  let count = 0;
  for (let step = 0; step < hallway.length; step++) {
    const character = hallway[step];
      if (character === ">") {
        for (let walk = step; walk < hallway.length; walk++) {
          if (hallway[walk] === "<") count += 1;
        }
      }
  }
  return (count*2);
}

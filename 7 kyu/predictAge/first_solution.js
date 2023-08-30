function predictAge(...args){
  const result = args.reduce((acc, age) => {
    return acc += (age * age);
  }, 0);
  return Math.floor(Math.sqrt(result) / 2);
}

// 86
console.log(
  predictAge(65,60,75,55,60,63,64,45),
);

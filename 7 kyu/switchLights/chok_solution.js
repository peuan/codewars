function switchLights(a = []) {
  for (let i = 0; i < a.length; i++) {
    const currentCandle = a[i];

    if (currentCandle === 1) {
      for (let j = 0; j <= i; j++) {
        a[j] = Number(!a[j]);
      }
    }
  }

  return a;
}

console.log(switchLights([1, 1, 1, 1, 1]), [0, 1, 0, 1, 0]);

console.log(switchLights([0, 0]), [0, 0]);

console.log(switchLights([1, 0, 0, 1, 0, 1, 0, 1]), [1, 1, 1, 0, 0, 1, 1, 0]);

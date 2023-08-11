function isTriangle(a, b, c) {
    if (Math.min( a, b, c) < 1) {
        return false
    }

    if (a + b > c && a + c > b && b + c > a) {
        return true
    } 

    return (b === c) && b > a 
}

console.log(isTriangle(6,3,10), false);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

function randomSub() {
    // Make coding great again!
    let a = 'abcdefghijklmnopqrstuvwxyz';
  return [...a].reduce((previous, current)  => {
    const index = getRandomInt(a.length)

    previous[current] = a[index]
    a = a.replace(a[index], '')
    
    return previous
  }, {})
}

console.log(randomSub())
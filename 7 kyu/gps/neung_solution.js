function gps(s, x) {
    if (x.length <= 1) {
      return 0;
    }
    let result;
    for (let i=1; i<x.length; i++) {
      let newResult = Math.floor((3600 * (x[i] - x[i-1])) / s);  
      if (i === 1 || result < newResult) {
        result = newResult;
      }
    }
    return result;
}
function seven(m) {
    var result = m;
    var step = 0; 
    while(result > 99){
      x = Math.floor(result / 10);
      y = result % 10;
      result = x - (2 * y);
      step++;
    }
    return [result, step];
}
function diamond(n){
  if(n < 0 || n % 2 == 0){
    return null;
  }
  let topPart = "";
  let bottomPart = "";
  for(let numberOfStar=1; numberOfStar<=n; numberOfStar+=2){
    if(numberOfStar === n) {
      topPart += "*".repeat(numberOfStar) + "\n";
    } else {
      let numberOfSpace = (n - numberOfStar) / 2;
      let content = " ".repeat(numberOfSpace) + "*".repeat(numberOfStar) + "\n";
      topPart = topPart + content;
      bottomPart = content + bottomPart;
    }
  }
  return topPart + bottomPart;
}
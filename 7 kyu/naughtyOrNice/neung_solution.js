function naughtyOrNice(data) {
  let nice = 0;
  let naughty = 0;
  for(let month in data){
    let days = data[month];
    for(let day in days){
      if(days[day] === "Naughty"){
        naughty++;
      }else if(days[day] === "Nice"){
        nice++;
      }
    }
  }
  if(naughty > nice) {
    return "Naughty!";
  }
  return "Nice!";
}
// it should return the places from the given routes
function findRoutes(routes) {
  let startIndex = findStart(routes);
  let result = routes[startIndex][0];
  do {
    result +=  ", " + routes[startIndex][1];
    startIndex = findNext(routes[startIndex][1], routes);
  } while (startIndex != -1);
  return result;
}

function findNext(current, routes){
  for(let i=0; i<routes.length; i++){
    if(current === routes[i][0]){
      return i;
    }
  }
  return -1;
}

function findStart(routes) {
  for(let i=0; i<routes.length; i++){
    let notStart = false;
    for(let j=0; j<routes.length; j++){
        if(routes[i][0] === routes[j][1]){
          notStart = true;
          break;  
        }
    }
    if(notStart === false){
      return i;
    }
  }
  return -1;
}
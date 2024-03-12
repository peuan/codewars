function removeRotten(bagOfFruits){
  if(!bagOfFruits) {
    return [];
  }
  for(let i=0; i<bagOfFruits.length; i++){
    if(bagOfFruits[i].startsWith('rotten')){
      bagOfFruits[i] = bagOfFruits[i].replace('rotten', '').toLowerCase();
    }
  }
  return bagOfFruits;
}
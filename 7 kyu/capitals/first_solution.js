var capitals = function (word) {
	return word.split('').map((v, index) => v === v.toUpperCase() ? index : false).filter(v => typeof v === 'number');
}

console.log(
  capitals('CodEwaRs')
);
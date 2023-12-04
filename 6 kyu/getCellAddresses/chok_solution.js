const getCellAddresses = (range = "") => {
  const [startCell, endCell] = range.split(":");
  const startColumn = startCell[0];
  const endColumn = endCell[0];
  const startRow = Number(startCell.slice(1));
  const endRow = Number(endCell.slice(1));

  const isSameCell = startCell === endCell && startColumn === endColumn
  const isInvalidColumn = startColumn.charCodeAt() > endColumn.charCodeAt()

  if ( isInvalidColumn|| isSameCell) {
    return [];
  }

  const results = [];

  for (let i = startRow; i <= endRow; i++) {
    for (
      let j = 0;
      j <= endColumn.charCodeAt() - startColumn.charCodeAt();
      j++
    ) {
      const column = String.fromCharCode(startColumn.charCodeAt() + j);
      results.push(`${column}${i}`);
    }
  }

  return results;
};

console.log(getCellAddresses("A1:A10"));

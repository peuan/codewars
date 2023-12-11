function whatCentury(year)
{
  let century = Math.floor((parseInt(year) + 99) / 100);
  if (century >= 4 && century <= 20) {
    return century + "th";
  } else if(century.toString().endsWith('1')) {
    return century + "st";
  } else if(century.toString().endsWith('2')) {
    return century + "nd";
  } else if(century.toString().endsWith('3')) {
    return century + "rd";
  }
  return century + "th";
}
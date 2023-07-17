function isIsogram(str) {
  var noDup = [];
  for (var i = 0; i < [...str].length; i++) {
    var lowerString = str[i].toLowerCase()
    if (!noDup.includes(lowerString)) {
      noDup.push(lowerString);
    }
  }
  return str.length === noDup.length;
}

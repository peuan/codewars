function isIsogram(str) {
  var noDup = [];
  for (var i = 0; i < [...str].length; i++) {
    if (!noDup.includes(str[i].toLowerCase())) {
      noDup.push(str[i].toLowerCase());
    }
  }
  return str.length === noDup.length;
}

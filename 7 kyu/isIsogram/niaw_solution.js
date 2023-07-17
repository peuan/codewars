function isIsogram(str) {
  var dup = [];
  for (var i = 0; i < [...str].length; i++) {
    if (!dup.includes(str[i].toLowerCase())) {
      dup.push(str[i].toLowerCase());
    }
  }
  return str.length === dup.length;
}

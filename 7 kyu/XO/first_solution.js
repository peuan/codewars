function XO(str = "") {
const x = [];
const o = [];
str?.split("")?.forEach((v) => {
  if (v.toLowerCase() === 'x') {
  x.push(v)
  } else if (v.toLowerCase() === 'o') {
  o.push(v)
  }

  return;
})

return x.length === o.length;
}
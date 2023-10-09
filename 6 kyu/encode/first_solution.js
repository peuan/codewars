function encode(plaintext = ""){
  return plaintext.split(' ').map(value => {
    const arr = [...value].reverse();
    const temp = arr[0];
    arr.push(temp);
    arr.shift();
    return arr.join('');
  }).join(' ');
}

console.log(
  encode("Hello World!"),
);
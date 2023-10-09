function encode(plaintext = "") {
    return plaintext.split(" ").filter(Boolean).map(text => {
        const reverseText = [...text].reverse().join('')

        return `${reverseText.slice(1)}${reverseText}`
    }).join(' ')
}

console.log(encode(`Hello World!`)); // => "lleHo dlroW!"

// expected 'Q<V)k#e%MR1O=6D%?=Ur@%\' to equal ' Q<V)k#e%MR1O=6D%?=Ur@%\'
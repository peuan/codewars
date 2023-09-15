	// const a = str.split('');

	// const b = []
	// a.forEach((c, index) => {
	// 	const reg = /^[a-z]*$/;

	// 	if (reg.test(c)) {
	// 		b.push({c, v: 0})
	// 	} else if (b.length > 0 && c === ' ') {
	// 		const lastIndex = b.length - 1;
	// 		const prevIndex = lastIndex - 1;

	// 		b[lastIndex].v = b[lastIndex].v + 1

	// 		if (b[prevIndex] && b[prevIndex].c === a[index - 1]) {
	// 			b[prevIndex].v = b[prevIndex].v + 1
	// 		}
	// 	}
	// 	console.log(b)
	// })

	// const max = Math.max(...b.map(({ v }) => v))

	// return b.reduce((acc, d) => {
	// 	return d.v >= max
	// 		? [...acc, d.c]
	// 		: acc
	// }, [])

/**
 *
 * @param {string} str
 */
function loneliest(str) {
	const a = str.trim().split('');
	const b = []
	const reg = /^[a-z]*$/;

	a.forEach((char) => {
		const lastIndex = b.length - 1;

		if (reg.test(char)) {
			b.push({
				char,
				left: lastIndex > -1 ?
					b[lastIndex].right
					: 0,
				right: 0,
			})
		} else if (char === ' ' && b[lastIndex]) {
			b[lastIndex].right = b[lastIndex].right + 1
		}

	})

	const max = Math.max(...b.map(({ left, right }) => left + right))

	return b.reduce((acc, data) => {
		if (max === data.left + data.right) {
			acc.push(data.char)
		}

		return acc;
	}, [])
}


console.log(loneliest("a b  c")) // b
console.log(loneliest("     a  b  c de        ")) // b
console.log(loneliest("abc"))
console.log(loneliest("a b c d e"))
console.log(loneliest('abc d   ef  g   h i j      ')) // g
console.log(loneliest(" i h     a      ej dg c      f    b       ")) // a
/**
 *
 * @param {string} str
 * @param {number} size
 * @returns {string}
 */
function trim(str, size) {
	if (str === '' || size === 0 || str.length <= size) {
		return str;
	}

	const reduceSize = size <= 3 ? 0 : 3;
	const totalDisplayChar = size - reduceSize;
	const transformText = str.substring(0, totalDisplayChar)

	return `${transformText}...`;
}

console.log(trim("Creating kata is fun", 14))
console.log(trim("He", 1))
console.log(trim("Code Wars is pretty rad", 50))
console.log(trim("Code Wars is pretty rad", 3))
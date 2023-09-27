/**
 *
 * @param {string} string
 * @returns {object}
 */
function count(string) {
	return string.split('').reduce((acc, char) => ({
		...acc,
		[char]: (acc[char] ?? 0) + 1
	}), {});
}

console.log(count('ab    c'))
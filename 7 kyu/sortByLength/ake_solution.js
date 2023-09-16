/**
 *
 * @param {string[]} array
 * @returns {string[]}
 */
function sortByLength (array) {
	return array.sort((a, b) => a.length - b.length);
};

console.log(sortByLength(["Beg", "Life", "I", "To"])) // ["I", "To", "Beg", "Life"]
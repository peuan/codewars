/**
 *
 * @param {string} string
 */
function wordsToMarks(string){
	return [...string].reduce((acc, char) => acc + char.charCodeAt() - 96, 0)
}

console.log(wordsToMarks("attitude"))
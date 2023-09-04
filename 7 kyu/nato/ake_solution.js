// the object LETTERS is preloaded
// LETTERS['B'] === 'Bravo', etc

function nato(word) {
	return word.split('').map((char) => LETTERS[char.toUpperCase()]).join(' ')
}
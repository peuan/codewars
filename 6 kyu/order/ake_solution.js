function order(words){
	if (words.length === 0) {
		return ''
	}

	const arrayWord = words.split(' ')

	const sortedWords = arrayWord.sort((a, b) => {
		const indexA = a.match(/\d+/)[0]
		const indexB = b.match(/\d+/)[0]

		return Number(indexA) - Number(indexB)
	})

	return sortedWords.join(' ')
}

console.log(
	order("is2 Thi1s T4est 3a")
)
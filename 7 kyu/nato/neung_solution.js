function nato(word) {
    let result = "";
	for(let i=0; i<word.length; i++){
        let letter = LETTERS[word[i].toUpperCase()];
        result += letter + " ";
    }
    return result.trim();
}
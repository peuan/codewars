export function checkExam(array1: string[], array2: string[]): number {
	const result = array1.reduce((acc, correctChoice, index) => {
		const studentChoice = array2[index];

		if (studentChoice && correctChoice === studentChoice) {
			return acc + 4
		} else if (studentChoice && correctChoice !== studentChoice) {
			return acc -1
		}

		return acc
	}, 0);

	return result > 0 ? result : 0;
}

console.log(checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]));
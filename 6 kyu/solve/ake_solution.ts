export function solve(s: string) {
	const splitByVowelsGroups = s.split(/[aeiou]/)

	return splitByVowelsGroups.reduce((acc: number, groupString) => {
		const chars = groupString.split('')
		const sum = chars.reduce((acc: number, char) => acc + char.charCodeAt(0) - 96, 0)

		return acc < sum ? sum : acc
	}, 0)
}
function toCapitalize(string: string) {
	return `${string.charAt(0).toUpperCase()}${string.slice(1).toLowerCase()}`;
}

export function generateChatRoomNames(users: string[]): string[] {
	const transformedDisplayNames = users.map((user, index1) => {
		const splitFirstAndLast = user.split(' ')
		const firstName = toCapitalize(splitFirstAndLast[0])
		const lastName = toCapitalize(splitFirstAndLast[1])

		let displayName = firstName

		const lastNamesByFirst = users.reduce((acc: string[], sameUser, index2) => {
			if (index1 !== index2) {
				const sameSplitFirstAndLast = sameUser.split(' ')
				const sameFirstName = toCapitalize(sameSplitFirstAndLast[0])
				const sameLastName = toCapitalize(sameSplitFirstAndLast[1])

				if (firstName === sameFirstName) {
					acc.push(toCapitalize(sameLastName))
				}
			}

			return acc
		}, [])

		if (lastNamesByFirst.length > 0) {
			const isStartedWithSameChar = lastNamesByFirst.find((lastNameByFirst) => lastName[0] === lastNameByFirst[0])
			const displayLastName = isStartedWithSameChar
				? lastName
				: lastName[0]

			displayName = `${displayName} ${displayLastName}`
		}

		return displayName
	})

	return transformedDisplayNames.sort()
}

console.log(generateChatRoomNames(["Jane Doe", "Jane Bloggs"]));
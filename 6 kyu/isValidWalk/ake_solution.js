function gogogo(walkPaths) {
	if (walkPaths.length !== 10) {
		return false
	}

	const trans = walkPaths.reduce((acc, path) => {
		acc[path] = acc[path] + 1

		return acc
	}, {
		n: 0,
		s: 0,
		w: 0,
		e: 0
	})

	return trans.n - trans.s === 0 && trans.w - trans.e === 0
}

console.log(
	gogogo(['n','s','n','s','n','s','n','s','n','s']),
	gogogo(['w','e','w','e','w','e','w','e','w','e','w','e']),
	gogogo(['w']),
	gogogo(['n','n','n','s','n','s','n','s','n','s'])
)
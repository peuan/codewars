function queueTime(customers, n) {
	const cloneCustomers = [...customers]
	let cashers = Array(n).fill(null)
	let time = 0
	let mostTotalItems = 0

	cashers = cashers.map(() => cloneCustomers.length > 0 ? cloneCustomers.shift() : null)

	mostTotalItems = Math.max(...cashers)
	console.log({mostTotalItems})

	while (mostTotalItems > 0) {
		mostTotalItems--
		cashers = cashers.map((totalItems, index) => {
			console.log('totalItems', totalItems)
			let nextTotals = totalItems - 1

			console.log('casher', index)
			console.log('nextTotals', nextTotals)
			if (cloneCustomers.length > 0 && nextTotals === 0) {
				nextTotals = cloneCustomers.shift()
				console.log('change', nextTotals)
			}

			console.log('current mostTotalItems', mostTotalItems)
			if (nextTotals > mostTotalItems) {
				mostTotalItems = nextTotals
				console.log('assign mostTotalItems', mostTotalItems)
			}

			return nextTotals
		})

		time++
	}

	return time
}

console.log(
	// queueTime([], 1),
	// queueTime([1,2,3,4], 1),
	// queueTime([2,2,3,3,4,4], 2),
	queueTime([1,2,3,4,5], 100)
);
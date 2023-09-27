function count(string="") {
    return [...string].reduce((previous, current) => {
        previous[current] = (previous[current] || 0) + 1
        return previous
    }, {})
}

console.log(count("aba"))
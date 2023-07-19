function printerError(s = '') {
    return `${[...s].filter(c => c.charCodeAt() > 109).length}/${s.length}`
}

console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"))
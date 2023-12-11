function whatCentury(year) {
  const convertedYear = Number(year)
  const yearToCentury = Math.ceil(convertedYear / 100)
  const addSuffix = String(yearToCentury)[1]

  if (["11", "12", "13"].includes(String(yearToCentury))) {
    return `${yearToCentury}th`
  } else if (addSuffix === "1") {
    return `${yearToCentury}st`
  } else if (addSuffix === "2") {
    return `${yearToCentury}nd`
  } else if (addSuffix === "3") {
    return `${yearToCentury}rd`
  } else {
    return `${yearToCentury}th`
  }
}

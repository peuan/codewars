function accum(s) {
    return s.toLowerCase().split``
      .map((v, i) => v.toUpperCase()+ v.repeat(i))
      .join`-`
}


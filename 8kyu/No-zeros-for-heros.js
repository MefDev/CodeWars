const  noBoringZeros = n => {
    const str = String(n).replace(/0+$/, '')
    return Number(str)
}
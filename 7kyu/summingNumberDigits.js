function sumDigits(number) {
    const set = String(Math.abs(number)).split("")
    let sum = 0;
    for (let i = 0; i < set.length; i++){
      sum += Number(set[i])
    }
    return sum
 }
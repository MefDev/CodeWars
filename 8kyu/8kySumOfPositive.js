function positiveSum(arr) {  
  return arr.length === 0 ? 0 : arr.filter(num => num > 0).reduce((acc, val) => acc + val, 0)
  }
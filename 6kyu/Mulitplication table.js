const multiplicationTable = (size) => {
    // PREP
    // P: Interger
    // E: [[1,2,3], [2,4,6], [3,6,9]]
    // R: Array
    
    // CREATE AN EMPTY ARRAY
    const table = []
    for (let i = 1; i <= size; i++){
      const multiples = []
      for (let j = 1; j <= size; j++){
        multiples.push(i * j)
      }
      table.push(multiples)
    }
    return table
  }
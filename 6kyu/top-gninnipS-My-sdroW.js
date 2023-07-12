function spinWords(string){
    // we need to split by a space
    // we need to count how many words on each
    // reverse if it's five or more chars
    // then join and return
    let shallowStr = string.split(' ').slice()
    let shuffleOfWords = []
    shallowStr.map(words => {
      if (words.length >= 5)
        {
          let reversedWord = words.split("").reverse().join('')
          shuffleOfWords.push(reversedWord)
          
        }
      else 
        {
          shuffleOfWords.push(words)
        }
    })
    return shuffleOfWords.join(" ")
    
  }
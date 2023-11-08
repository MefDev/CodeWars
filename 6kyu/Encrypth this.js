var encryptThis = (text) => {
    const encryptList = []
    const list = text.split(" ")
    list.map((word, index) =>{
      if (word.length == 1)
      {
        /*  Convert to ASCII */
        const onlyLetter = word.charCodeAt(0)
        encryptList.push(onlyLetter)
      }
      else{
        /* Switch Letters */ 
        const encryptedWord = switchLetters(word)
        /*  Convert to ASCII */
        const firstLetter = word[0].charCodeAt(0)
         /* Join the first Letter with encrypted words */ 
        const wholeEncryptedWord = firstLetter + encryptedWord
        /* put everything to EncryptList */ 
        encryptList.push(wholeEncryptedWord)
      } 
    })
    /* Join the words with a space*/ 
    return encryptList.join(" ")
  }
  
  const switchLetters = (word) => {
    const wordList = []
    const length = word.length
    const lastLetter = word[length - 1]
    const firstLetter = word[1]
    for (let i = 1; i < length; i++){
      if ( i == 1)
        wordList.push(lastLetter)
      else if (i == length - 1)
      {
        wordList.push(firstLetter)
      }
      else{
        wordList.push(word[i])
      }    
    }
    return wordList.join("")
  }
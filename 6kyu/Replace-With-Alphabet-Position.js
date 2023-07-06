function alphabetPosition(text) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    const indexes = []
    text = text.toLowerCase().split('')
    text.map((alpha) => {
      let index = alphabet.indexOf(alpha)
      if (index != -1)
        indexes.push(index + 1)
    })
    return indexes.join(" ");
  }
  console.log(alphabetPosition("The sunset sets at twelve o' clock."))
const wordsToMarks = (string) => {
    // PREP
    //P: a string
    //R: Integer;
    //E: "AC": 4
    //P: 
    string = string.split("")
    const alphabets = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    let count = 0;
    alphabets.forEach(char => {
        string.forEach(letter => {
          if (letter === char){
            const index = alphabets.indexOf(char) + 1;
            count += index;
          }
        })
      })
    return count;
    }
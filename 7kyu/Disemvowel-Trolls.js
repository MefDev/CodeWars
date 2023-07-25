function disemvowel(str) {
    const vowels= /[^aeiou]/gi
    return str.match(vowels).join("")
  }
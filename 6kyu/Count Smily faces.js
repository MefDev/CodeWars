const countSmileys = (arr) => {
    if (arr.length === 0 ) return 0
    const str = arr.join("")
    const reg = /:-?D|:-?\)|:~?D|:~?\)|;-?D|;-?\)|;~?D|;~?\)/g
    const matchResult = str.match(reg)
    return matchResult ? matchResult.length : 0
  }
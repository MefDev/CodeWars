const array = (string) => {
    // TODO
    if (string === "" || string.split(",").length == 1 || string.split(",").length == 2) return null
    else{
      string = string.split(",")
      string.shift()
      string.pop()
      return string.join(' ')
    }
  }
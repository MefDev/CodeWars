const addLength = (str) => {
let newList = []
str = str.split(" ")
str.map(word => {
  newWord = `${word} ${word.length}`
  newList.push(newWord)
})
return newList;
}

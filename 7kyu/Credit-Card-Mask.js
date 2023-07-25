function muskify(cc){
  const length = cc.length
  const firstElements = length - 4
  let arr = []
  for ( let i = 0; i < firstElements; i++)
    {
      arr.push("#")
    }
  for (let i = firstElements; i < length; i++)
    {
      arr.push(cc[i])
    }
  return arr.join("")
}
function mxdiflg(a1, a2) {
    let list = []
    for (let i = 0; i < a1.length; i++){
      for (let j = 0; j < a2.length; j++){
         let num = Math.abs(a1[i].length - a2[j].length)
         list.push(num)
      }
    }
  return list.length === 0 ? -1 : Math.max(...list)
}
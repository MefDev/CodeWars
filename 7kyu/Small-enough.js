function smallEnough(a, limit){
    // Are all the values less or equal than the limit ?
    return a.every(elm => elm <= limit)
  }
function consonantCount(str) {
    str = str.toLowerCase()
    const consonents = 'bcdfghjklmnpqrstvwxyz'
    let count = 0;
    for (const elm of str)
      {
        for (const consonent of consonents)
          {
            if (elm === consonent)
              {
                count++
              }
          }
      }
    return count
  }
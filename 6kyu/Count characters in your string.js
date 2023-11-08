const count = (string) => {
    let obj = {}
    string.split("").reduce((accumalator, currentValue) => {
       if (!obj[currentValue]) obj[currentValue] = 0;
       obj[currentValue]++;
    }, 0);
    return obj
  }
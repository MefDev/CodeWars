function duplicateCount(text){
    const lowerText = text.toLowerCase()
    let obj = {}
    let count = 0;
    lowerText.split("").reduce((acc, currentVal) => {
        if (!obj[currentVal])
          {
            obj[currentVal] = 1
          }
       else obj[currentVal]++
    }, 0)
   for (let i in obj)
     {
       if (obj[i] > 1)
         {
           count++
         }    
     }
   return count;
 }
            
const isAnagram = function(test, original) {
    const t = test.toLowerCase().split('').sort().join('')
    const o = original.toLowerCase().split('').sort().join('')
    return t === o  
   };
function sumMix(x){
    return x.map(strNum => parseInt(strNum)).reduce((acc, currentVal) => acc + currentVal)
}
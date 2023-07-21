function betterThanAverage(classPoints, yourPoints) {
    let average = classPoints.reduce((accumaltor, currentValue) => accumaltor + currentValue) / classPoints.length
    return average < yourPoints ? true : false
 }
 
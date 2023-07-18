function findAverage(array) {
    return array.length > 0 ? array.reduce((accumlalor, currentValue) =>  accumlalor + currentValue) / array.length : 0;
  }
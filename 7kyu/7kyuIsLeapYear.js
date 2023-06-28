const isLeapYear  = year => {
  // TODO
  return ((year % 4) === 0 && (year % 100) !== 0 || (year % 400) === 0)
  }

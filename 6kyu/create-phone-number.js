function createPhoneNumber(numbers){
    return numbers.reduce((phoneNumber, digits) => phoneNumber.replace("x", digits), "(xxx) xxx-xxxx")
  }
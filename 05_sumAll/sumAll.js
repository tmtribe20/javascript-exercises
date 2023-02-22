const sumAll = function (int1, int2) {
  //checks if int1 and int2 are numbers
  if (typeof int1 !== 'number' || typeof int2 !== 'number') {
    return 'ERROR';
  } else if (int1 < 0 || int2 < 0) {
    return 'ERROR';
  } else if (int1 > int2) {
    let sum = 0;
    for (let i = int2; i <= int1; i++) {
      sum += i;
    }
    return sum;
  } else {
    let sum = 0;
    for (let i = int1; i <= int2; i++) {
      sum += i;
    }
    return sum;
  }
};

// Do not edit below this line
module.exports = sumAll;

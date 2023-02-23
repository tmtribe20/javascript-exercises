const fibonacci = function (n) {
  if (typeof n === 'string') {
    //if number is a string convert to number
    n = Number(n);
  }

  if (n < 0) return 'OOPS'; // if n is negative, return 'OOPS'
  if (n === 1) return 1; // if n is 1, return 1
  if (n === 2) return 1; // if n is 2, return 1
  //if string convert to number
  if (typeof n === 'string') {
    n = Number(n);
  }
  return fibonacci(n - 1) + fibonacci(n - 2); // else, return the sum of the previous two numbers
};

// Do not edit below this line
module.exports = fibonacci;

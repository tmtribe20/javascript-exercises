const fibonacci = function (count) {
  if (count < 0) return 'OOPS'; // if n is negative, return 'OOPS'
  if (count === 0) return 0; // if n is 0, return 0
  let a = 0; // if n is 1, return 1
  let b = 1; // if n is 2, return 1
  for (let i = 1; i < count; i++) {
    //
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};

module.exports = fibonacci;

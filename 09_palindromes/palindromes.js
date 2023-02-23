const palindromes = function (str) {
  const strArr = str.toLowerCase().split(''); // convert to lowercase and split into array
  const strArrFiltered = strArr.filter((char) => {
    return char.match(/[a-z]/); // filter out non-alphabetic characters
  });
  const strArrReversed = strArrFiltered.slice().reverse(); // copy array and reverse it
  return strArrFiltered.join('') === strArrReversed.join(''); // compare the two arrays
};

// Do not edit below this line
module.exports = palindromes;

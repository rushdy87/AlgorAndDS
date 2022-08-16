// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  let sign = n < 0 ? true : false;
  let s = n.toString();
  const reversedLink = s.split('').reverse();
  if (sign) {
    reversedLink.pop();
    reversedLink.unshift('-');
  }
  return parseInt(reversedLink.join(''));
}

module.exports = reverseInt;

/*
Solution:
function reverseInt(n) {
  const reversed = n
    .toString() //now we work eith string..
    .split('')
    .reverse()
    .join('');

  return parseInt(reversed) * Math.sign(n); //parseInt('3-') => 3 ... parseInt('-3') => -3;
  // Math.sing(-1) => -1 ... Math.sing(1) => 1
}
*/

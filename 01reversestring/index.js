// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // my solution
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    //avoid this syntax: for(; ; )
    reversed += str[i];
  }
  return reversed;
}

module.exports = reverse;

/*
Solution #1:
function reverseString(str) {
  return str
    .split('') // turn str into an array
    .reverse() // call reverse method - he reverse() method reverses the order of the elements in an array.
    .join(''); // Join the array back into a string
}

Solution #2:
function reverseString(str) {
  let reversed = '';
  for (let char of str) {
    reversed = char + reversed; // add the char in the start of reversed.
  }
  return reversed;
}
Solution #3:
function reverseString(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}
*/

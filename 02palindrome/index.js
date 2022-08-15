// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  return str.split('').reduce((revesed, char) => char + revesed, '') === str;
}

module.exports = palindrome;

/*
Solution #1:
function palindrome(str) {
  const reversed = str
    .split('')
    .reverse()
    .join('');
  return reversed === str;
  // should return true or false
}

Solution #2:
function palindrome(str) {
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
}
// Notes about Solution #2:
* how it work?
['a', 'b', 'c', 'b', 'a'];
1- char = str[0], str[str.length - index - 1]] = str[5-0-1,];
2- char = str[1], str[str.length - index - 1]] = str[5-1-1,];
3- char = str[2], str[str.length - index - 1]] = str[5-2-1,];
4- char = str[3], str[str.length - index - 1]] = str[5-3-1,];
5- char = str[4], str[str.length - index - 1]] = str[5-4-1,];

* it's not ideal solution, because we are doing twice work we really have to do.
*/

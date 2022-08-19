// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const vowelsLetters = { a: 0, e: 0, i: 0, o: 0, u: 0 };
  let numberOfVowels = 0;
  for (const vowel in vowelsLetters) {
    for (const char of str) {
      if (vowel === char.toLowerCase()) {
        vowelsLetters[vowel] += 1;
      }
    }
    numberOfVowels += vowelsLetters[vowel];
  }
  return numberOfVowels;
}

module.exports = vowels;

/*
Solution #1:
function vowels(str) {
  let count = 0;

  const cheaker = ['a', 'e', 'i', 'o', 'u'];

  for (const char of str.toLowerCase()) {
    if (cheaker.includes(char)) {
      count++;
    }
  }
  return count;
}

Solution #2:
function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

*/

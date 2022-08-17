// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const sA = stringA.replace(/[^\w]/g, '').toLowerCase();
  const sB = stringB.replace(/[^\w]/g, '').toLowerCase();
  const charsA = {};
  const charsB = {};
  if (sA.length === sB.length) {
    for (let i = 0; i < sA.length; i++) {
      charsA[sA[i]] = charsA[sA[i]] + 1 || 1;
      charsB[sB[i]] = charsB[sB[i]] + 1 || 1;
    }
    for (const key in charsA) {
      if (!charsB[key] || charsA[key] !== charsB[key]) {
        return false;
      }
    }
    return true;
  }
  return false;
}

module.exports = anagrams;

/*
Solution #1:
function anagrams(stringA, stringB) {
  aCharMap = buildCharMAp(stringA);
  bCharMap = buildCharMAp(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    //Object.keys() return an array of keys:
    // Object.keys({a: 1, b: 2, c: 3}) ===> [a, b, c]
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}

function buildCharMAp(str) {
  const charMap = {};
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}

Solution #2:
function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
*/

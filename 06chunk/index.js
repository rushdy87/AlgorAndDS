// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  const chunkedArray = [];
  for (let index = 0; index < array.length; index += size) {
    const subarray = [];
    for (let j = index; j < index + size && j < array.length; j++) {
      subarray.push(array[j]);
    }
    chunkedArray.push(subarray);
  }
  return chunkedArray;
}

module.exports = chunk;

/*
Solution #1:
function chunk(array, size) {
  const chunked = [];
  for (const element of array) {
    const last = chunked[chunked.length - 1]; // last subarray in the new array. in the begining it will be undefined.
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element); //last here the subarray that we are currently workin with
    }
  }
  return chunked;
}

Solution #2:
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size)); //slice return A new array containing the extracted elements.
    index += size;
  }
  return chunked;
}

Solution #3: //Using reduce
function chunk(array, size) {
  return array.reduce((chunks, curr) => {
    let len = chunks.length
    if (len === 0 || chunks[len - 1].length === size) chunks.push([curr])
    else chunks[len - 1].push(curr)
    return chunks
  }, []);
}

Solution #4: //Using splice //bad
function chunk(array, size) {
  let chunked = [];
  while (array.length !== 0) {
    chunked.push(array.splice(0, size));
  }
  return chunked;
}
// Note: caution with that chunk function using .splice as that method is changing the original array. 
// So, once you run that chunk function your original array will be empty producing side effects 
// maybe you don't want.

*/

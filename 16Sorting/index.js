// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }
    if (indexOfMin !== i) {
      const lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const results = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      results.push(left.shift());
    } else {
      results.push(right.shift());
    }
  }
  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };

/**
 * bubble Sort
 function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }
    return arr;
}
 */

/** The Merge Sort algorithm:
 * The Merge Sort algorithm is a sorting algorithm that is based on the Divide and Conquer paradigm. 
 * In this algorithm, the array is initially divided into two equal halves and then they are combined in a 
 * sorted manner.
 * Think of it as a recursive algorithm continuously splits the array in half until it cannot be further divided.
 * The Merage Pseudocode (for merge(left, right)):
    1- Create 'results' array.
    2- While there are still elements in both arrays.
    3-    If the first element the left half is less than first in right half
    4-      'shift' the element from left into a 'result' arr.
    5-    else
    6-      'shift' the element from right into a 'result' arr.
    7- Take everything from the array that still has stuff in it and put it in results.
* Splitter Pseudocode:
    1- If the incoming array doesn't have length 1.
    2- Divide the incoming array into two halves.
    3- Call the 'splitter' again with each half.
    4- Call the 'merger' with each half.

* example: mergeSort([97, 0]):
  first call: mergeSort([97, 0]);
  second call: mergeSort([97]), third call: mergeSort([0]);
  Both 'mergeSort' calls return the array [97], [0]; // line 36
  Pass both halves to 'merge' function
 */

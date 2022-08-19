// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //1- create empty array of arraies:
  const spiralMatrix = [];
  for (let i = 0; i < n; i++) {
    spiralMatrix.push([]);
  }

  // 2- Create a counter variable, starting at 1:
  let counter = 1;

  //3-  Create startColumn, endColumn, startRow, endRow
  let startColumn = 0;
  let endColumn = n - 1; //depending on n
  let startRow = 0;
  let endRow = n - 1; //depending on n

  while (startColumn <= endColumn && startRow <= endRow) {
    // this for the Top Row (first row):
    for (let index = startColumn; index <= endColumn; index++) {
      spiralMatrix[startRow][index] = counter;
      counter++;
    }
    startRow++;

    // Right column
    for (let index = startRow; index <= endRow; index++) {
      spiralMatrix[index][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // Bottom row
    for (let index = endColumn; index >= startColumn; index--) {
      spiralMatrix[endRow][index] = counter;
      counter++;
    }
    endRow--;

    // Start colomn
    for (let index = endRow; index >= startRow; index--) {
      spiralMatrix[index][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }
  return spiralMatrix;
}

module.exports = matrix;

/*
Clean Recursive Solution:

function matrix(n, tail = 0) {
  if (n === 1) return [[tail + 1]];
  if (n === 2)
    return [
      [tail + 1, tail + 2],
      [tail + 4, tail + 3],
    ];
 
  
  //         a  a  a  a  a  b
  // tail -> d  *  *  *  *  b
  //         d  * matrix *  b
  //         d  * (n-2)  *  b
  //         d  *  *  *  *  b
  //         d  c  c  c  c  c
  
  
          return [
            // top Array
            [...Array(n)].map((v, index) => tail + 1 + index),
            // mid Arrays
            ...matrix(n - 2, tail + 4 * (n - 1)).map((r, index) => [
              tail + 4 * (n - 1) - index,
              ...r,
              tail + n + 1 + index,
            ]),
            // bottom Array
            [...Array(n)].map((v, index) => tail + 3 * (n - 1) + 1 - index),
          ];
        }
*/

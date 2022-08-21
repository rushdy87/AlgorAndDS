// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  const fibonacci = [];
  let firstPrev = 1;
  let secondPrev = 0;
  let element = 0;
  let temp;
  for (let index = 0; index <= n; index++) {
    fibonacci.push(element);
    temp = element;
    element = firstPrev + secondPrev;
    firstPrev = secondPrev;
    secondPrev = element;
  }
  return fibonacci[n];
}

module.exports = fib;
/*
Solution #1: Linear Runtime
function fib(n) {
  const result = [0, 1];
  for (let index = 2; index <= n; index++) {
    const a = result[index - 1];
    const b = result[index - 2];
    result.push(a + b);
  }
  return result[n];
}

Solution #2: Exponential Runtime
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

Solution #3: improve Solution #2 to not be Exponential Runtime
// with recursion and memoization:
  function memoize(fn) {
    //fn refere to function
    const cache = {};
    return function (...args) {
      if (cache[args]) {
        return cache[args];
      }
      const result = fn.apply(this, args);
      cache[args] = result;

      return result;
    };
  }

  function slowFib(n) {
    if (n < 2) {
      return n;
    }
    return fib(n - 1) + fib(n - 2);
  }

  const fib = memoize(slowFib);
*/

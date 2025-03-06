// https://www.hackerrank.com/challenges/one-week-preparation-kit-lonely-integer/problem
function lonelyinteger(a) {
  // Write your code here

  const newSet = new Set(a);
  for (const currentNumber of newSet) {
    if (a.filter((number) => number === currentNumber).length === 1) {
      return currentNumber;
    }
  }
}

console.log(lonelyinteger([1]));
console.log(lonelyinteger([1, 1, 2]));
console.log(lonelyinteger([0, 0, 1, 2, 1]));

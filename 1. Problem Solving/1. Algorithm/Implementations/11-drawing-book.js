// https://www.hackerrank.com/challenges/drawing-book/problem
function pageCount(n, p) {
  // Write your code here
  let frontTurns = Math.floor(p / 2);
  let backTurns = Math.floor(n / 2) - Math.floor(p / 2);

  return Math.min(frontTurns, backTurns);
}

console.log(pageCount(6, 2));
console.log(pageCount(5, 3));
console.log(pageCount(5, 4));

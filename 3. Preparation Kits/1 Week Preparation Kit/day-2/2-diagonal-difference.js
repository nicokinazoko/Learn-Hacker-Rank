// https://www.hackerrank.com/challenges/one-week-preparation-kit-diagonal-difference/problem

function diagonalDifference(arr) {
  // Write your code here
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    firstDiagonal += arr[i][i];
    secondDiagonal += arr[i][arr.length - i - 1];
  }

  return Math.abs(firstDiagonal - secondDiagonal);
}

console.log(
  diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12],
  ])
);

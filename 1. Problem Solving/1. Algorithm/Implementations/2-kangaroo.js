// https://www.hackerrank.com/challenges/kangaroo/problem
function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let isCanJumpTogether = 'YES';

  if (v1 === v2) {
    isCanJumpTogether = x1 === x2 ? 'YES' : 'NO';
  }

  const totalJump = (x2 - x1) / (v1 - v2);
  isCanJumpTogether =
    totalJump >= 0 && Number.isInteger(totalJump) ? 'YES' : 'NO';

  return isCanJumpTogether;
}

// test case
console.log(kangaroo(0, 3, 4, 2));
console.log(kangaroo(0, 2, 5, 3));
console.log(kangaroo(21, 6, 47, 3));

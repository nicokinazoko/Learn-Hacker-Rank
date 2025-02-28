// https://www.hackerrank.com/challenges/one-week-preparation-kit-plus-minus/problem
function plusMinus(arr) {
  // Write your code here
  let positiveNumber = 0;
  let negativeNumber = 0;
  let zeroNumber = 0;
  for (const number of arr) {
    if (number < 0) {
      negativeNumber++;
    } else if (number > 0) {
      positiveNumber++;
    } else {
      zeroNumber++;
    }
  }

  console.log(positiveNumber / arr.length);
  console.log(negativeNumber / arr.length);
  console.log(zeroNumber / arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1]);
plusMinus([1, 2, 3, -1, -2, -3, 0, 0]);

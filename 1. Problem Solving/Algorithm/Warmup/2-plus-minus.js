// link
//www.hackerrank.com/challenges/plus-minus/problem

function plusMinus(arr) {
  // Write your code here
  let positiveValues = 0;
  let negativeValues = 0;
  let zeroValues = 0;

  arr.forEach((number) => {
    if (number < 0) {
      negativeValues++;
    } else if (number === 0) {
      zeroValues++;
    } else {
      positiveValues++;
    }
  });

  console.log(positiveValues / arr.length);
  console.log(negativeValues / arr.length);
  console.log(zeroValues / arr.length);
}

plusMinus([-4, 3, -9, 0, 4, 1]);

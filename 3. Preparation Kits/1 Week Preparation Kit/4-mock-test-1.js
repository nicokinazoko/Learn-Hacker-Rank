// https://www.hackerrank.com/test/143hd7jsid6/questions/521e954e6ff11
function fizzBuzz(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('FizzBuzz');
    } else if (i % 3 === 0 && i % 5 !== 0) {
      console.log('Fizz');
    } else if (i % 3 !== 0 && i % 5 === 0) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}

// fizzBuzz(15);

function findMedian(arr) {
  // Write your code here
  const median = arr.sort((a, b) => a - b)[Math.floor(arr.length / 2)];

  return median;
}

findMedian([1, 3, 2, 5, 4]);

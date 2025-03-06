// https://www.hackerrank.com/challenges/one-week-preparation-kit-mini-max-sum/problem
function miniMaxSum(arr) {
  // Write your code here

  let arrayCalculation = [];
  for (let i = 0; i < arr.length; i++) {
    const tempSum = arr.reduce((acc, value) => acc + value, 0) - arr[i];
    arrayCalculation.push(tempSum);
  }
  const highestNumber = Math.max(...arrayCalculation);
  const lowestNumber = Math.min(...arrayCalculation);
  console.log(lowestNumber, highestNumber);
}

miniMaxSum([1, 2, 3, 4, 5]);
miniMaxSum([7, 69, 2, 221, 8974]);
miniMaxSum([140638725, 436257910, 953274816, 734065819, 362748590]);

// for better complexity

// function miniMaxSum(arr) {
//   const totalSum = arr.reduce((acc, num) => acc + num, 0);
//   const minVal = Math.min(...arr);
//   const maxVal = Math.max(...arr);

//   console.log(totalSum - maxVal, totalSum - minVal);
// }

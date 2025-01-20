function miniMaxSum(arr) {
  // Write your code here
  let maximumNumberSum = 0;
  let minimumNumberSum = 0;

  arr.forEach((value, index) => {
    let totalNumber =
      arr.reduce((acc, currentValue) => acc + currentValue, 0) - arr[index];

    if (maximumNumberSum < totalNumber) {
      maximumNumberSum = totalNumber;
    }

    if (
      minimumNumberSum <= maximumNumberSum &&
      totalNumber < minimumNumberSum
    ) {
      minimumNumberSum = totalNumber;
    }
    if (index === 0) {
      minimumNumberSum = totalNumber;
    }
  });

  console.log(minimumNumberSum, maximumNumberSum);
}

miniMaxSum([1, 2, 3, 4, 5]);

// code for better performance
// function miniMaxSum(arr) {
//   // Sort the array
//   arr.sort((a, b) => a - b);

//   const minimumNumberSum = arr.slice(0, 4).reduce((acc, val) => acc + val, 0);

//   const maximumNumberSum = arr.slice(1, 5).reduce((acc, val) => acc + val, 0);

//   console.log(minimumNumberSum, maximumNumberSum);
// }

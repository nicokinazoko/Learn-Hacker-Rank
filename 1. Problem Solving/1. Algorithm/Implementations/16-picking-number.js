// https://www.hackerrank.com/challenges/picking-numbers/problem
function pickingNumbers(a) {
  // Write your code here
  let counter = 0;
  for (const number of a) {
    const negativeResult = a.filter(
      (numberArray) => Math.abs(number - numberArray) < 1
    );
    const positiveResult = a.filter(
      (numberArray) => number - numberArray === 1
    );

    if (counter < negativeResult.length + positiveResult.length) {
      counter = negativeResult.length + positiveResult.length;
    }
  }

  return counter;
}

console.log(pickingNumbers([4, 6, 5, 3, 3, 1]));
console.log(pickingNumbers([98, 3, 99, 1, 97, 2]));

// for better complexity
// function pickingNumbers(a) {
//   const frequency = {};

//   // Count the frequency of each number in the array
//   for (const num of a) {
//     frequency[num] = (frequency[num] || 0) + 1;
//   }

//   let maxLength = 0;

//   // Iterate through the frequency map to find the maximum subarray length
//   for (const num in frequency) {
//     const currentNum = parseInt(num);
//     const nextNum = currentNum + 1;

//     // Calculate the potential length of the subarray
//     const currentLength = frequency[currentNum] + (frequency[nextNum] || 0);

//     // Update maxLength if the currentLength is greater
//     if (currentLength > maxLength) {
//       maxLength = currentLength;
//     }
//   }

//   return maxLength;
// }

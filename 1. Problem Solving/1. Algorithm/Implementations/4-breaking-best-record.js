// https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

function breakingRecords(scores) {
  // Write your code here
  let totalBreakingRecords = 0;
  let totalWorstRecords = 0;
  let currentHighestScore = 0;
  let currentLowestScore = 0;

  scores.forEach((score, index) => {
    if (index === 0) {
      currentHighestScore = score;
      currentLowestScore = score;
    } else {
      if (score > currentHighestScore) {
        currentHighestScore = score;
        if (index !== 0) {
          totalBreakingRecords++;
        }
      } else if (score < currentHighestScore && score < currentLowestScore) {
        currentLowestScore = score;

        totalWorstRecords++;
      }
    }
  });

  return [totalBreakingRecords, totalWorstRecords];
}

console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1]));
console.log(breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]));

// for better optimization
// function breakingRecords(scores) {
//   let totalBreakingRecords = 0;
//   let totalWorstRecords = 0;
//   let currentHighestScore = scores[0];
//   let currentLowestScore = scores[0];

//   for (let i = 1; i < scores.length; i++) {
//     if (scores[i] > currentHighestScore) {
//       currentHighestScore = scores[i];
//       totalBreakingRecords++;
//     } else if (scores[i] < currentLowestScore) {
//       currentLowestScore = scores[i];
//       totalWorstRecords++;
//     }
//   }

//   return [totalBreakingRecords, totalWorstRecords];
// }

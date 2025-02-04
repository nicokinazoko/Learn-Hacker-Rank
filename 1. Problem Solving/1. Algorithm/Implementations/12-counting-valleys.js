// https://www.hackerrank.com/challenges/counting-valleys/problem
function countingValleys(steps, path) {
  // Write your code here
  let isStartNewValley = false;
  let valleyTraversed = 0;
  let totalValley = 0;

  path.split('').forEach((value) => {
    if (value === 'U') {
      valleyTraversed++;
    } else {
      if (valleyTraversed === 0 && valleyTraversed - 1 === -1) {
        isStartNewValley = true;
      }
      valleyTraversed--;
    }

    if (valleyTraversed === 0 && isStartNewValley) {
      totalValley++;
      isStartNewValley = false;
    }
  });
  return totalValley;
}
console.log(countingValleys(8, 'UDDDUDUU'));
console.log(countingValleys(12, 'DDUUDDUDUUUD'));

// for better performance
// function countingValleys(steps, path) {
//   let altitude = 0;
//   let valleyCount = 0;

//   for (let i = 0; i < steps; i++) {
//     if (path[i] === 'U') {
//       altitude++;
//       if (altitude === 0) {
//         valleyCount++; // Valley ends when returning to sea level
//       }
//     } else {
//       altitude--; // Step down
//     }
//   }

//   return valleyCount;
// }

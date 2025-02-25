// https://www.hackerrank.com/challenges/the-hurdle-race
function hurdleRace(k, height) {
  // Write your code here

  const findHeight = height.find((number) => number > k);
  if (!findHeight) {
    return 0;
  }

  const sortedHeight = height.sort((a, b) => b - a);
  const calculateDose = Math.abs(sortedHeight[0] - k);

  return calculateDose;
}
console.log(hurdleRace(4, [1, 6, 3, 5, 2]));
console.log(hurdleRace(7, [2, 5, 4, 5, 2]));

// for better complexity
// function hurdleRace(k, height) {
//   const maxHurdle = Math.max(...height);
//   return Math.max(0, maxHurdle - k);
// }

// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem
function beautifulDays(i, j, k) {
  // Write your code here
  let countBeautifulDays = 0;
  for (let iteration = i; iteration <= j; iteration++) {
    if (
      Math.abs(iteration - +String(iteration).split('').reverse().join('')) %
        k ===
      0
    ) {
      countBeautifulDays++;
    }
  }

  return countBeautifulDays;
}

console.log(beautifulDays(20, 23, 6));

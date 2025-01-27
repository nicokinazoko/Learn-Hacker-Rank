// https://www.hackerrank.com/challenges/divisible-sum-pairs/problem
function divisibleSumPairs(n, k, ar) {
  // Write your code here

  let totalDivisiblePairs = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const sumDividedArray = [ar[i], ar[j]].reduce(
        (acc, currentValue) => acc + currentValue,
        0
      );
      if (sumDividedArray !== 0 && sumDividedArray % k === 0)
        totalDivisiblePairs++;
    }
  }

  return totalDivisiblePairs;
}

console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2]));

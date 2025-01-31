// https://www.hackerrank.com/challenges/sock-merchant/problem
function sockMerchant(n, ar) {
  // Write your code here
  let totalSockPairs = 0;
  const newSet = new Set(ar);
  for (const set of newSet.values()) {
    totalSockPairs += Math.floor(
      ar.filter((value) => set === value).length / 2
    );
  }

  return totalSockPairs;
}

console.log(sockMerchant(7, [1, 2, 1, 2, 1, 3, 2]));
console.log(sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]));

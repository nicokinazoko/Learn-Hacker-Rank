// https://www.hackerrank.com/challenges/climbing-the-leaderboard/problem
function climbingLeaderboard(ranked, player) {
  // Write your code here

  const arrayRank = [];

  const setRanked = [...new Set(ranked)];
  let i = setRanked.length - 1;

  for (const playerNumber of player) {
    while (i >= 0 && playerNumber >= setRanked[i]) {
      i--;
    }

    arrayRank.push(i + 2);
  }

  return arrayRank;
}

console.log(
  climbingLeaderboard([100, 100, 50, 40, 40, 20, 10], [5, 25, 50, 120])
);
console.log(
  climbingLeaderboard([100, 90, 90, 80, 75, 60], [50, 65, 77, 90, 102])
);

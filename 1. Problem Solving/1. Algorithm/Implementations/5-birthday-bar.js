// https://www.hackerrank.com/challenges/the-birthday-bar
function birthday(s, d, m) {
  // Write your code here

  let totalBar = 0;

  for (let i = 0; i < s.length; i++) {
    const currentBar = s.slice(i, m + i);
    const totalValueArray = currentBar.reduce(
      (acc, currentValue) => acc + currentValue,
      0
    );
    if (currentBar.length === m && totalValueArray === d) {
      totalBar++;
    }
  }

  return totalBar;
}

console.log(birthday([1, 2, 1, 3, 2], 3, 2));

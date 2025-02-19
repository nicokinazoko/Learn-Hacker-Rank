// https://www.hackerrank.com/challenges/cats-and-a-mouse
function catAndMouse(x, y, z) {
  let chaseStatus;
  const firstCatDistance = Math.abs(x - z);
  const secondCatDistance = Math.abs(y - z);
  if (firstCatDistance < secondCatDistance) {
    chaseStatus = 'Cat A';
  } else if (firstCatDistance > secondCatDistance) {
    chaseStatus = 'Cat B';
  } else {
    chaseStatus = 'Mouse C';
  }
  return chaseStatus;
}

console.log(catAndMouse(1, 2, 3));
console.log(catAndMouse(1, 3, 2));

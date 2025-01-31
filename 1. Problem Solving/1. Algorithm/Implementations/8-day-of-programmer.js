// https://www.hackerrank.com/challenges/bon-appetit/problem
function dayOfProgrammer(year) {
  // Write your code here
  let leapDate;

  if (year < 1918) {
    leapDate = `${year % 4 === 0 ? 12 : 13}.09.${year}`;
  } else if (year > 1918) {
    leapDate = `${
      (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 12 : 13
    }.09.${year}`;
  } else {
    leapDate = `26.09.${year}`;
  }
  return leapDate;
}

console.log(dayOfProgrammer(2017));
console.log(dayOfProgrammer(2016));
console.log(dayOfProgrammer(1800));
console.log(dayOfProgrammer(2100));
console.log(dayOfProgrammer(1917));

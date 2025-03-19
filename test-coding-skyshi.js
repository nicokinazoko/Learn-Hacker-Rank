// function solution(n) {
//   return +String(n).slice(0, 2) + +String(n).slice(-2);
// }

// console.log(solution(2024));

// function solution(n) {
//   let angka = '';
//   for (let i = 0; i < n - 1; i++) {
//     angka += '0';
//   }

//   angka += '1';

//   return angka;
// }

// console.log(solution(3));

// function solution(n, m) {
//   return Math.floor(m / n) * n;
// }

// console.log(solution(5, 20));

// function seatsBlockedBehind(nCols, nRows, col, row) {
//   return (nCols - (col - 1)) * (nRows - row);
// }

// console.log(seatsBlockedBehind(16, 11, 5, 3));

// function solution(divisor, bound) {
//   if (bound % divisor === 0) {
//     return bound;
//   } else {
//     return divisor * Math.floor(bound / divisor);
//   }
// }

// console.log(solution(3, 10));

// function solution(n, firstNumber, moveRight) {
//   if (firstNumber + moveRight > n) {
//     return firstNumber + moveRight - n;
//   } else {
//     return firstNumber + moveRight;
//   }
// }

// console.log(solution(8, 0, 2));

// function solution(n) {
//   if (n / 3600 === 0) {
//     return n / 3600;
//   } else {
//     const minute = Math.floor(n / 60);
//     const currentMinute = minute % 60;
//     const totalHour = (minute - currentMinute) / 60;
//     const totalMinute = currentMinute;

//     const timeString = `${totalHour}${totalMinute}`;
//     if (totalHour > 9 && totalMinute > 9) {
//       return +timeString[0] + +timeString[1] + +timeString[2] + +timeString[3];
//     } else if (totalHour > 9)
//   }
// }

// console.log(solution(14440));

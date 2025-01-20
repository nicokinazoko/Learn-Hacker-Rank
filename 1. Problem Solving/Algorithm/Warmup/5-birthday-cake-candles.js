function birthdayCakeCandles(candles) {
  // Write your code here
  let totalCandles = 0;

  const sortedCandles = candles.sort((a, b) => b - a);

  totalCandles = candles.filter((candle) => sortedCandles[0] === candle).length;

  return totalCandles;
}

// for better performance
// function birthdayCakeCandles(candles) {
//   // Write your code here

//   const maxValueCandle = Math.max(...candles);

//   // totalCandles = candles.filter((candle) => candle === maxValueCandle).length;
//   const totalCandles = candles.filter(
//     (candle) => candle === maxValueCandle
//   ).length;

//   return totalCandles;
// }

console.log(birthdayCakeCandles([3, 2, 1, 3]));

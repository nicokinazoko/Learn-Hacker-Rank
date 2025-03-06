// https://www.hackerrank.com/challenges/one-week-preparation-kit-time-conversion/problem
function timeConversion(s) {
  // Write your code here
  const timeFormat = s.slice(-2);
  let [hour, minute, second] = s.slice(0, -2).split(':');

  if (timeFormat === 'PM' && hour !== '12') {
    hour = `${parseInt(hour) + 12}`;
  } else if (timeFormat === 'AM' && hour === '12') {
    hour = `00`;
  }
  const currentFormattedTime = [hour, minute, second].join(':');
  return currentFormattedTime;
}

// timeConversion('07:05:45PM');
// timeConversion('12:01:00PM');
// timeConversion('12:01:00AM');

console.log(timeConversion('07:05:45PM'));
console.log(timeConversion('12:01:00PM'));
console.log(timeConversion('12:01:00AM'));

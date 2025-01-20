// https://www.hackerrank.com/challenges/time-conversion/

function timeConversion(s) {
  // Write your code here

  const period = s.slice(-2);

  let [hour, minute, second] = s.slice(0, -2).split(':');

  if (period === 'PM' && hour !== '12') {
    hour = (parseInt(hour, 10) + 12).toString();

    if (hour >= 24) {
      hour = `0${24 - hour}`;
    }
  } else if (period === 'AM' && hour === '12') {
    hour = '00';
  }
  return [hour, minute, second].join(':');
}

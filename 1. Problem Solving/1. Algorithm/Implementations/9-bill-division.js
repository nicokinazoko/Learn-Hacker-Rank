// https://www.hackerrank.com/challenges/bon-appetit/problem
function bonAppetit(bill, k, b) {
  // Write your code here
  bill.splice(k, 1);

  let totalBillPerEachPerson =
    bill.reduce((acc, currentValue) => acc + currentValue, 0) / 2;
  const resultSplitBill =
    totalBillPerEachPerson === b
      ? 'Bon Appetit'
      : Math.abs(totalBillPerEachPerson - b);

  console.log(resultSplitBill);
  return resultSplitBill;
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12));
console.log(bonAppetit([3, 10, 2, 9], 1, 7));

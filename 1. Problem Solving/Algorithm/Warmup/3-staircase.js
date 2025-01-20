function staircase(n) {
  // Write your code here
  let stringStaircase = '';
  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i; j++) {
      stringStaircase += ' ';
    }

    for (let k = 0; k <= i; k++) {
      stringStaircase += '#';
    }

    if (i < n - 1) {
      stringStaircase += '\n';
    }
  }

  console.log(stringStaircase);
}

console.log(staircase(4));

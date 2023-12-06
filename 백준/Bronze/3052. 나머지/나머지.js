const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

let numbers = [];
let count = 0;
let isDuplicated = 0;
for (let i = 0; i < 10; i++) {
  [numbers[i]] = input[i].split(" ").map(Number);
  numbers[i] %= 42;
}
for (let j = 0; j < 10; j++) {
  isDuplicated = 0;
  for (let k = j - 1; k >= 0; k--) {
    if (numbers[k] == numbers[j]) {
      isDuplicated = 1;
    }
  }
  if (isDuplicated == 0) {
    count++;
  }
}
console.log(count);
const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let numbers = [];
let account = [];
let answer = 0;
for (let i = 1; i < input.length; i++) {
  numbers.push(input[i]);
}
for (let j = 0; j < numbers.length; j++) {
  if (numbers[j] != 0) {
    account.push(numbers[j]);
  } else {
    account.pop();
  }
}
for (let k = 0; k < account.length; k++) {
  answer += account[k] * 1;
}
console.log(answer);

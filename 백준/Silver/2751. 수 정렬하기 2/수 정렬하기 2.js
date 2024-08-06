const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim())
  .map(Number);

let numbers = [];

for (let i = 0; i < input[0] * 1; i++) {
  numbers.push(input[i + 1]);
}

numbers.sort((a, b) => a - b);

let answer = "";
for (let j = 0; j < input[0] * 1; j++) {
  answer += numbers[j] + "\n";
}
console.log(answer);

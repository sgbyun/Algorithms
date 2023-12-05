const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [n] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
const [x] = input[2].split(" ").map(Number);
let result = 0;
for (let i = 0; i < n; i++) {
  if (x == numbers[i]) {
    result++;
  }
}
console.log(result);
const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [count] = input[0].split(" ").map(Number);
const numbers = input[1].split("").map(Number);
let ans = 0;
for (let i = 0; i < count; i++) {
  ans += numbers[i];
}
console.log(ans);

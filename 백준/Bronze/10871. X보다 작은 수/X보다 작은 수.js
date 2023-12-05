const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, x] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
let ans = "";
let i = 0;
while (i <= n - 1) {
  if (numbers[i] < x) {
    ans += numbers[i] + " ";
  }
  i++;
}
console.log(ans);

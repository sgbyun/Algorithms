const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

let [a] = input[0].split(" ").map(Number);
let ans = 1;
while (a >= 1) {
  ans = ans * a;
  a--;
}
console.log(ans);
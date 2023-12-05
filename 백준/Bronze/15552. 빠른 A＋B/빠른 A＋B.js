const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const testcase = parseInt(input[0]);
let i = 1;
let ans = "";
while (i <= testcase) {
  let [a, b] = input[i].split(" ").map(Number);
  if (b) {
    ans += a + b + "\n";
  }
  i++;
}

console.log(ans);

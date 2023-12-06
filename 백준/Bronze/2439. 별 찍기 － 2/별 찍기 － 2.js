const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);
for (let i = 1; i <= a; i++) {
  console.log(" ".repeat(a - i) + "*".repeat(i));
}
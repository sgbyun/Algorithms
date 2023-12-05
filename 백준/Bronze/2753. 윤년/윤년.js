const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);

if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}
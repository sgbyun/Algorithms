const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);

let i = 1;
while (i <= a) {
  console.log("*".repeat(i));
  i++;
}
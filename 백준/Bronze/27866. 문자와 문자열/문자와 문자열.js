const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const string = input[0];
const [a] = input[1].split(" ").map(Number);
console.log(string[a - 1]);
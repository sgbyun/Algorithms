const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [count] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
console.log(Math.min.apply(null, numbers), Math.max.apply(null, numbers));
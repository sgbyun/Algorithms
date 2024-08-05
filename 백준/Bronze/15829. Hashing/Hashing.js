const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const length = input[0].split(" ").map(Number);
const string = input[1].split(" ");
const r = 31;
let hash = 0;
for (let i = 0; i < length; i++) {
  let alphabet = string[0].charCodeAt(i) - 96;
  hash += alphabet * r ** i;
}
console.log(hash);

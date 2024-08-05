const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const length = input[0].split(" ").map(Number);
const string = input[1].split(" ");
const r = 31;
const M = 1234567891;

let hash = 0;
let power = 1;

for (let i = 0; i < length; i++) {
  let alphabet = string[0].charCodeAt(i) - 96;
  hash = (hash + ((alphabet * power) % M)) % M;
  power = (power * r) % M;
}
console.log(hash);

const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const a = input[1].split(" ").map(Number);

let total = 0;
let max = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] > max) {
    max = a[i];
  }
  total += a[i];
}
const average = (total / max / input[0]) * 100;
console.log(average);

const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);
const [b] = input[1].split(" ").map(Number);
const [c] = input[2].split(" ").map(Number);
const val = a * b * c;
const stringVal = val.toString();
let count = [];
for (let i = 0; i <= 9; i++) {
  count[i] = 0;
}
for (let j = 0; j < stringVal.length; j++) {
  count[stringVal[j]] += 1;
}
for (let k = 0; k <= 9; k++) {
  console.log(count[k]);
}
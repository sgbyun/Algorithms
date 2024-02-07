const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);
let pass = 1;
let limit = 1;
for (let i = 1; i < a; i++) {
  limit += 6 * i;
  pass++;
  if (a <= limit) {
    break;
  }
}
console.log(pass);

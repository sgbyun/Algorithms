const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;
while (true) {
  if (!input[i]) {
    break;
  }
  let [a, b] = input[i].split(" ").map(Number);
  if (b) {
    console.log(a + b);
  }
  i++;
}
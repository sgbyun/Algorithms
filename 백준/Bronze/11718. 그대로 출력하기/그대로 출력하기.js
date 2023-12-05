const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

let i = 0;
while (i < 100) {
  if (input[i]) {
    console.log(input[i]);
    i++;
  } else {
    break;
  }
}

const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const a = input[0].split(" ");
if (a[0] == "") {
  console.log(0);
} else {
  console.log(a.length);
}

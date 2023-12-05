const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const a = input[0];
let ans = "";
for (let i = 0; i < a.length; i++) {
  if (a[i] == a[i].toUpperCase()) {
    ans += a[i].toLowerCase();
  } else {
    ans += a[i].toUpperCase();
  }
}
console.log(ans);

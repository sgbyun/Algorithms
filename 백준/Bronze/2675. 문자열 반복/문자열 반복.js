const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [t] = input[0].split(" ").map(Number);
let ans = "";
for (let i = 1; i <= t; i++) {
  const testCase = input[i].split(" ");
  const r = parseInt(testCase[0]);
  const string = testCase[1];
  for (let j = 0; j < string.length; j++) {
    if (string[j] != "\r") {
      ans += string[j].repeat(r);
    }
  }
  ans += "\n";
}
console.log(ans);

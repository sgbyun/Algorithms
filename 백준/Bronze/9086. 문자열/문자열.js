const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");
const [length] = input[0].split(" ").map(Number);
for (let i = 1; i <= length; i++) {
  const string = input[i];
  const stringLength = string.length;
  console.log(string[0] + string[stringLength - 1]);
}
const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

let ans = "";
for (let i = 1; i <= 30; i++) {
  ans += i + "\n";
}

for (let y = 0; y < 28; y++) {
  const [a] = input[y].split(" ").map(Number);
  ans = ans.replace(a + "\n", "");
}

console.log(ans);
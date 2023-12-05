const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [n, m] = input[0].split(" ").map(Number);

let ans = "";
for (let i = 1; i <= n; i++) {
  const firstrow = input[i].split(" ").map(Number);
  const secondrow = input[i + n].split(" ").map(Number);
  for (let y = 0; y < m; y++) {
    ans += firstrow[y] + secondrow[y] + " ";
  }
  ans += "\n";
}
console.log(ans);
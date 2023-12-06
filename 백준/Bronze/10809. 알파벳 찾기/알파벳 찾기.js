const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ");
let first = [];
for (let i = 0; i <= 25; i++) {
  first[i] = -1;
}
for (let j = 0; j < a.length; j++) {
  const ascii = a[j].charCodeAt() - 97;
  if (first[ascii] == -1) {
    first[ascii] = a.indexOf(a[j]);
  }
}
for (let k = 0; k <= 25; k++) {
  process.stdout.write(first[k] + " ");
}
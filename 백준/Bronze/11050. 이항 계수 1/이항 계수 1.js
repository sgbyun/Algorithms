const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const num = input[0].split(" ").map(Number);

let n = num[0];
let k = num[1];
let nk = num[0] - num[1];
let nfac = 1;
let kfac = 1;
let nkfac = 1;
for (let i = 0; i < num[0]; i++) {
  nfac *= n;
  n--;
  if (k != 0) {
    kfac *= k;
    k--;
  }
  if (nk != 0) {
    nkfac *= nk;
    nk--;
  }
}
console.log(nfac / (kfac * nkfac));
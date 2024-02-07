const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const a = input[0].split(" ").map(Number);
let gcd = 1; // greatest common divisor
let lcm = 0; // least common multiple
const lowerVal = Math.min.apply(null, a);
for (let i = 1; i <= lowerVal; i++) {
  if (a[0] % i == 0 && a[1] % i == 0) {
    gcd = i;
  }
}
console.log(gcd);
loop1: for (let j = 1; ; j++) {
  for (let k = 1; k * a[1] <= j * a[0]; k++) {
    if (a[0] * j == a[1] * k) {
      lcm = a[1] * k;
      break loop1;
    }
  }
}
console.log(lcm);

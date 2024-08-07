const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let sugar = input[0] * 1;
let bags = 0;
bags += Math.floor(sugar / 5);
sugar = sugar % 5;
for (let i = 0; i < 2; i++) {
  if (sugar % 3 != 0 && bags > 0) {
    bags -= 1;
    sugar += 5;
  }
}
bags += Math.floor(sugar / 3);
sugar = sugar % 3;
if (sugar == 0) {
  console.log(bags);
} else {
  console.log(-1);
}

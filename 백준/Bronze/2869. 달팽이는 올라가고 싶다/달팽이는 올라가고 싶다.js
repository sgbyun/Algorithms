const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const numbers = input[0].split(" ").map(Number);

let gap = numbers[0] - numbers[1];
let togo = Math.floor((numbers[2] - numbers[0]) / gap);
let meters = togo * gap;
let days = togo;
while (1) {
  meters += numbers[0];
  days += 1;
  if (meters >= numbers[2]) {
    break;
  }
  meters -= numbers[1];
  gap = numbers[2] - meters;
}
console.log(days);

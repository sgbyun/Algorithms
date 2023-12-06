const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);
const testCases = [];
const guests = [];
for (let i = 1; i <= a; i++) {
  testCases[i] = input[i].split(" ").map(Number);
  guests[i] = 0;
}
for (let j = 1; j <= a; j++) {
  if (testCases[j][2] % testCases[j][0] == 0) {
    guests[j] += testCases[j][0] * 100;
    guests[j] += testCases[j][2] / testCases[j][0];
  } else {
    guests[j] += (testCases[j][2] % testCases[j][0]) * 100;
    guests[j] += parseInt(testCases[j][2] / testCases[j][0]) + 1;
  }

  console.log(guests[j]);
}

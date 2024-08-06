const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let members = new Array(input[0] * 1);

for (let i = 0; i < input[0] * 1; i++) {
  members[i] = new Array(2);
  members[i][0] = input[i + 1].split(" ").map(Number)[0];
  members[i][1] = input[i + 1].split(" ")[1];
}

members.sort((a, b) => a[0] - b[0]);

for (let j = 0; j < input[0] * 1; j++) {
  console.log(members[j][0], members[j][1]);
}

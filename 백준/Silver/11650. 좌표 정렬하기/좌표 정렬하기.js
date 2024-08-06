const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let coordinate = new Array(input[0] * 1);

for (let i = 0; i < input[0] * 1; i++) {
  coordinate[i] = new Array(2);
  coordinate[i][0] = input[i + 1].split(" ").map(Number)[0];
  coordinate[i][1] = input[i + 1].split(" ")[1];
}

coordinate.sort((a, b) => a[1] - b[1]);

coordinate.sort((a, b) => a[0] - b[0]);

for (let j = 0; j < input[0] * 1; j++) {
  console.log(coordinate[j][0], coordinate[j][1]);
}

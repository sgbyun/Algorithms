const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);
let score = [];
for (let i = 1; i <= a; i++) {
  let combo = 0;
  score[i] = 0;
  for (let j = 0; j < input[i].length; j++) {
    if (input[i][j] == "O") {
      combo++;
    } else if (input[i][j] == "X") {
      while (combo != 0) {
        score[i] += combo;
        combo--;
      }
    }
    if (j == input[i].length - 1) {
      while (combo != 0) {
        score[i] += combo;
        combo--;
      }
    }
  }
}
for (let l = 1; l <= a; l++) {
  console.log(score[l]);
}

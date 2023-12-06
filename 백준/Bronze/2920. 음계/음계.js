const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const song = input[0].split(" ").map(Number);
let status = "";
for (let i = 0; i < 7; i++) {
  if (song[0] == 1 && i < 7 && song[i + 1] - song[i] == 1) {
    status = "ascending";
  } else if (song[0] == 8 && i < 7 && song[i] - song[i + 1] == 1) {
    status = "descending";
  } else {
    status = "mixed";
    break;
  }
}

console.log(status);
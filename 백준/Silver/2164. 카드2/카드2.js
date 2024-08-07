const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let cards = [];
for (let i = 1; i <= input[0] * 1; i++) {
  cards.push(i);
}

let head = 0;
let tail = cards.length;
while (tail - head > 1) {
  head++;
  cards[tail++] = cards[head++];
}

console.log(cards[head]);

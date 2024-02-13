const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

let count = 0;
while (1) {
  const numbers = input[count].split(" ").map(Number);
  if (numbers[0] == 0) {
    break;
  }
  let biggest = 0;
  let sum = 0;
  for (let j = 0; j <= 2; j++) {
    if (numbers[j] > biggest) {
      biggest = numbers[j];
    }
  }
  for (let k = 0; k <= 2; k++) {
    if (numbers[k] != biggest) {
      sum += numbers[k] ** 2;
    }
  }
  biggest = biggest ** 2;
  if (biggest != sum) {
    console.log("wrong");
  } else {
    console.log("right");
  }
  count++;
}

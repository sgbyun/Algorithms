const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [a] = input[0].split(" ").map(Number);
const numbers = input[1].split(" ").map(Number);
let prime = 0;
for (let i = 0; i < a; i++) {
  let isPrime = true;
  for (let j = 2; j <= numbers[i] / 2; j++) {
    if (numbers[i] % j == 0) {
      isPrime = false;
    }
  }
  if (numbers[i] <= 1) {
    isPrime = false;
  }
  if (isPrime == true) {
    prime += 1;
  }
}
console.log(prime);

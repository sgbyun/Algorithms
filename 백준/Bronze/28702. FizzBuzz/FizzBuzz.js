const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

let number = 0;
for (let i = 2; i >= 0; i--) {
  if (!isNaN(input[i])) {
    number = input[i] * 1 + 3 - i;
  }
}
if (number % 5 == 0 && number % 3 == 0) {
  console.log("FizzBuzz");
} else if (number % 3 == 0) {
  console.log("Fizz");
} else if (number % 5 == 0) {
  console.log("Buzz");
} else {
  console.log(number);
}

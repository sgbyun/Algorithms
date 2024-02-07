const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let validate = "yes";
  const [a] = input[i].split("\r");
  for (let j = 0; j < a.length / 2; j++) {
    if (a[j] != a[a.length - 1 - j]) {
      validate = "no";
    }
  }
  console.log(validate);
}

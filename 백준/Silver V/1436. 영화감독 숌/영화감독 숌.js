const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [numbers] = input[0].split(" ").map(Number);
let name = 0;
let count = 0;
while (1) {
  const stringName = name.toString();
  if (stringName.indexOf("666") != -1) {
    count += 1;
  }
  if (count == numbers) {
    console.log(name);
    break;
  }
  name++;
}

const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const people = input[0].split(" ").map(Number);
const sizes = input[1].split(" ").map(Number);
const units = input[2].split(" ").map(Number);
let shirts = 0;
for (let i = 0; i < sizes.length; i++) {
  if (sizes[i] != 0) {
    let check = sizes[i] / units[0];
    if (check % 1 == 0) {
      shirts += Math.floor(sizes[i] / units[0]);
    } else {
      shirts += Math.floor(sizes[i] / units[0]) + 1;
    }
  }
}
const penunit = Math.floor(people / units[1]);
const pen = people - penunit * units[1];
console.log(shirts);
console.log(penunit, pen);

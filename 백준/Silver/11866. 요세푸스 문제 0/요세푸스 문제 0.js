const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.trim());

let people = [];
const step = input[0].split(" ").map(Number)[1];
let order = "";
let currentstep = step;
for (let i = 1; i <= input[0].split(" ").map(Number)[0]; i++) {
  people.push(i);
}

while (people.length > 0) {
  let currentlength = people.length;
  while (currentstep <= currentlength) {
    if (currentlength == 1) {
      order += people[currentstep - 1];
    } else {
      order += people[currentstep - 1] + ", ";
    }
    people.splice(currentstep - 1, 1);
    currentstep += step - 1;
    currentlength = people.length;
  }
  currentstep %= currentlength;
  if (currentstep == 0) {
    currentstep = currentlength;
  }
}

console.log("<" + order + ">");

const input = require("fs")
  .readFileSync(process.platform == "linux" ? "dev/stdin" : "boj/test/test.txt")
  .toString()
  .trim()
  .split("\n");

const [numbers] = input[0].split(" ").map(Number);
let wordarray = [];
for (let i = 1; i <= numbers; i++) {
  let availability = true;
  for (let j = 0; j < i; j++) {
    if (wordarray[j] == input[i]) {
      availability = false;
    }
  }
  if (availability == true) {
    wordarray.push(input[i]);
  }
}
wordarray.sort();
wordarray.sort((a, b) => a.length - b.length);
for (let k = 0; k < wordarray.length; k++) {
  console.log(wordarray[k]);
}

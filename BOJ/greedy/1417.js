const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";
// const input = require('fs').readFileSync(path).toString().trim();
list = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n")
  .map((item) => item * 1)
  .slice(1);
let master = list.shift();
let answer = 0;

while (master <= Math.max.apply(null, list)) {
  list.sort((a, b) => b - a);
  master++;
  list[0]--;
  answer++;
}

console.log(answer);

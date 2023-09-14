// 백준 > 게임을 만든 동준이
[n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => item * 1);

let answer = 0;
let current = 0;

for (let i = arr.length - 1; i >= 0; i--) {
  if (current !== 0 && arr[i] > current) {
    answer += arr[i] - current;
    current--;
  } else current = arr[i] - 1;
}

console.log(answer);

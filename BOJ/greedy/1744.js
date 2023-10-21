// 백준 > 수 묶기
[n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n")
  .map((item) => Number(item));

let positive = arr.filter((item) => item > 0).sort((a, b) => b - a);
let negative = arr.filter((item) => item <= 0).sort((a, b) => a - b);

let answer = 0;
if (positive.length % 2 === 1) answer += positive.pop();
for (let i = 0; i < positive.length; ) {
  a = positive[i] * positive[i + 1];
  b = positive[i] + positive[i + 1];
  answer += a > b ? a : b;
  i += 2;
}

if (negative.length % 2 === 1) {
  let last = negative.pop();
  answer += last === 0 ? 0 : last;
}

for (let i = 0; i < negative.length; ) {
  a = negative[i] * negative[i + 1];
  answer += a;
  i += 2;
}

console.log(answer);

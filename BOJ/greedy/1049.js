// 백준 > 기타줄
[...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

[N, M] = arr
  .shift()
  .split(" ")
  .map((item) => Number(item));
six = arr
  .map((item) => item.split(" ").map((element) => Number(element)))
  .sort((a, b) => a[0] - b[0]);
one = arr
  .map((item) => item.split(" ").map((element) => Number(element)))
  .sort((a, b) => a[1] - b[1]);

let min = Number.MAX_SAFE_INTEGER;

let answer = 0;
if (six[0][0] > one[0][1] * 6) {
  answer = one[0][1] * N;
} else {
  answer =
    Math.floor(N / 6) * six[0][0] +
    (six[0][0] <= (N % 6) * one[0][1] ? six[0][0] : (N % 6) * one[0][1]);
}
console.log(answer);

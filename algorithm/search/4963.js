const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
// 1.하나의 값을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim();
// const input = require('fs').readFileSync(path).toString().trim();
// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim().split(' ');
input = require("fs").readFileSync(path).toString().trim().split("\n");

// console.log(input);

function solution(connect, n, k) {
  console.log(connect, n, k);
  // 1.
}

_connect = [
  ["B", "F", "G", "C"],
  ["A", "C"],
  ["E", "A", "G"],
  ["A", "B", "G"],
  ["A", "C", "F"],
  ["G", "D"],
  ["F", "B"],
];
_n = 2;
_k = 3;

solution(_connect, _n, _k);

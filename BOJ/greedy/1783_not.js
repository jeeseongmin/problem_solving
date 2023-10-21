const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
// 1.하나의 값을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim();
// const input = require('fs').readFileSync(path).toString().trim();
// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
const input = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((item) => item * 1);
//[n, ...arr] = require('fs')
//   .readFileSync(path)
//   .toString()
//   .trim()
//   .split('n')

console.log(input);

// 1번을 쓰려면 위로 2칸, 오른쪽으로 1칸이 존재해야함.
// 2번을 쓰려면 위로 1칸, 오른쪽으로 2칸이 존재해야함.
// 3번을 쓰려면 아래로 1칸, 오른쪽으로 2칸이 존재해야함.
// 4번을 쓰려면 아래로 2칸, 오른쪽으로 1칸이 존재해야함.

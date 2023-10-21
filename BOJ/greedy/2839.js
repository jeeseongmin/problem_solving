// 백준 > 설탕 배달
const _input = require("fs").readFileSync("sample.txt").toString().trim();

function solution(input) {
  for (let i = Math.floor(input / 5); i >= 0; i--) {
    let x = i;
    let y = Math.floor((input - x * 5) / 3);
    if (5 * x + 3 * y === Number(input)) return x + y;
  }
  return -1;
}

console.log(solution(_input));

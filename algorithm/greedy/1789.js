// 백준 > 수들의 합
const _input = require("fs").readFileSync("../sample.txt").toString().trim();

function solution(input) {
  let answer = 1;
  for (let i = 1; i <= Number(input); i++) {
    let sum = (i * i + i) / 2;
    if (Number(input) - sum > i) answer = i + 1;
    else break;
  }
  return answer;
}

console.log(solution(_input));

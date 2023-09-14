// 백준 > ATM
const [_n, ..._arr] = require("fs")
  .readFileSync("sample.txt")
  .toString()
  .trim()
  .split(/\s/);

function solution(n, arr) {
  let answer = 0;
  const numbers = arr
    .map((item, index) => {
      return Number(item);
    })
    .sort((a, b) => {
      return b - a;
    });
  for (let i = 1; i <= arr.length; i++) {
    answer += i * numbers[i - 1];
  }
  return answer;
}

console.log(solution(_n, _arr));

// 백준 > 30
const _input = require("fs").readFileSync("../sample.txt").toString().trim();

function solution(input) {
  const str = input
    .split("")
    .map((item) => Number(item))
    .sort((a, b) => b - a);
  let count = str.reduce((acc, cur) => acc + cur);

  if (str[str.length - 1] !== 0 || count % 3 !== 0) return -1;
  else return str.join("");
}

console.log(solution(_input));

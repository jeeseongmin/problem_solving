// 백준 > 로프

const [_n, ..._arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");
const _array = _arr.map((item) => Number(item)).sort((a, b) => b - a);

function solution(n, array) {
  let max = 0;
  let element = [];
  for (let i = 0; i < array.length; i++) {
    if (max <= array[i] * (i + 1)) element.push(array[i] * (i + 1));
  }
  return Math.max(...element);
}

console.log(solution(_n, _array));

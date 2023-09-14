// 백준 > 보물
const [_n, ..._arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");
const _array = _arr.map((item, index) => {
  return item.split(" ").map((element) => Number(element));
});

function solution(n, arr) {
  const A = arr[0].sort((a, b) => b - a);
  const B = arr[1].sort((a, b) => a - b);
  return A.reduce((acc, cur, index) => acc + cur * B[index], 0);
}

console.log(solution(_n, _array));

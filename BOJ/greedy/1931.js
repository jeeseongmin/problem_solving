// 백준 > 회의실 배정
const [_n, ..._arrr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");
const _arr = _arrr.map((item, index) => {
  return item.split(" ").map((element, index) => Number(element));
});

function solution(n, arr) {
  let max = 0;
  let last = 0;

  const sorted = arr.sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  sorted.forEach((item) => {
    if (item[0] >= last) {
      last = item[1];
      max++;
    }
  });
  return max;
}

console.log(solution(_n, _arr));

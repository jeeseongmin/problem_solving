// 백준 > A->B
const _input = require("fs").readFileSync("../sample.txt").toString().trim();

function solution(input) {
  let count = 0;
  let [before, after] = input.split(" ").map((item) => Number(item));
  if (before === after) return 0;
  while (after > before) {
    if (after % 10 === 1) after = Math.floor(after / 10);
    else if (after % 2 === 0) after = after / 2;
    else return -1;
    count++;
  }
  return before === after ? count + 1 : -1;
}

console.log(solution(_input));

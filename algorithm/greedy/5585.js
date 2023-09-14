// 백준 > 거스름돈
const _input = require("fs").readFileSync("../sample.txt").toString().trim();

function solution(input) {
  let rest = 1000 - Number(input);
  const arr = [500, 100, 50, 10, 5, 1];
  return arr.reduce((acc, cur) => {
    // 위에서부터 cur보다 클 경우에만 해당
    if (rest >= cur) {
      let current = Math.floor(rest / cur);
      rest = rest % cur;
      return acc + current;
    } else return acc;
  }, 0);
}

console.log(solution(_input));

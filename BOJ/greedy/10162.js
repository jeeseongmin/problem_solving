// 백준 > 전자레인지
const _input = require("fs").readFileSync("../sample.txt").toString().trim();

function solution(input) {
  let time = Number(input);
  if (time === 0) return -1;
  let answer = [0, 0, 0];
  let times = [300, 60, 10];
  times.forEach((item, index) => {
    if (time >= item) {
      answer[index] = Math.floor(time / item);
      time = time % item;
    }
  });
  return time === 0 ? answer.join(" ") : -1;
}

console.log(solution(_input));

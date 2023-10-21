// 백준 > 잃어버린 괄호
const _input = require("fs").readFileSync("../sample.txt").toString().trim();

function solution(input) {
  const res = input.split("-");
  let answer = Number(sumItem(res.shift()));
  res.forEach((item) => {
    sum = sumItem(item);
    answer -= sum;
  });
  return answer;
}

function sumItem(arr) {
  return arr.split("+").reduce((acc, cur) => {
    return Number(acc) + Number(cur);
  }, 0);
}

console.log(solution(_input));

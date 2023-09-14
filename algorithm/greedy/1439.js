// 백준 > 뒤집기
const _input = require("fs").readFileSync("../sample.txt").toString().trim();

function solution(input) {
  let one = input.split("1").filter((item) => item !== "");
  let zero = input.split("0").filter((item) => item !== "");
  return zero.length < one.length ? zero.length : one.length;
}

console.log(solution(_input));

// 백준 > 동전 0
const [_n, ..._arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

function solution(n, arr) {
  let answer = 0;
  let K = Number(n.split(" ")[1]);
  const filtered = arr
    .filter((item, index) => {
      return Number(item) <= Number(K);
    })
    .map((item, index) => Number(item))
    .sort((a, b) => b - a);

  filtered.forEach((item) => {
    if (K >= item) {
      // 갯수 구해서 더하기
      // K 최신화
      answer += Math.floor(K / item);
      K = K % item;
      if (K === 0) return;
    }
  });
  return answer;
}

console.log(solution(_n, _arr));

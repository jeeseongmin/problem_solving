// 백준 > 주유소
// 이 문제는 쉽지만, JS의 특성을 알아야 한다.
// JS는 큰 값 처리가 어렵기 때문에 BigInt를 사용해줘야한다.
const [_n, ..._arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

function solution(n, arr) {
  const cost = arr[0].split(" ").map((item) => BigInt(item));
  const position = arr[1].split(" ").map((item) => BigInt(item));

  let costs = position[0] * cost[0];
  let min = position[0];

  for (let i = 1; i < position.length - 1; i++) {
    if (min > position[i]) min = position[i];
    costs += min * cost[i];
  }
  return String(costs);
}

console.log(solution(_n, _arr));

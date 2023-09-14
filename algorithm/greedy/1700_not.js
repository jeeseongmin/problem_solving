// 백준 > 멀티탭 스케줄링
// 안되는 건데 솔루션을 봐도 이해가 잘 안됨..
const fs = require("fs");
const input = fs
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));
const [N, K] = input[0];
const nums = input[1];
let on = [];
let answer = 0;

for (let i = 0; i < K; i++) {
  const now = nums[i];
  if (on.includes(now)) continue;
  if (on.length < N) {
    on.push(now);
  } else {
    let target;
    let value = 0;
    on.forEach((v) => {
      let next = Infinity;
      for (let j = i + 1; j < K; j++) {
        if (nums[j] == v) {
          next = j;
          break;
        }
      }
      if (value < next) {
        target = v;
        value = next;
      }
      console.log(value, next, target);
    });
    on = on.filter((v) => v != target);

    on.push(now);
    console.log(on);
    answer++;
  }
}

console.log(answer);

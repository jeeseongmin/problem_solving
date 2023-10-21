// 백준 > 신입 사원
// 하나의 점수를 오름차순으로 정렬 후 정렬되어있다는 전체 하에 다른 점수들의 min value를 업데이트하며 카운트
_input = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");
N = Number(_input.shift());
let array = [];

for (let i = 0; i < N; i++) {
  let M = Number(_input.shift());
  let sliced = _input
    .splice(0, M)
    .map((item) => {
      let arr = item.split(" ");
      return [Number(arr[0]), Number(arr[1])];
    })
    .sort((a, b) => a[1] - b[1] || a[0] - b[0]);
  array.push(sliced);
}

let answer = [];
for (let i = 0; i < N; i++) {
  const targetArray = array[i];
  let min = targetArray.length;
  let count = 0;
  for (let j = 0; j < targetArray.length; j++) {
    if (min >= targetArray[j][0]) min = targetArray[j][0];
    else {
      count++;
    }
  }
  answer.push(targetArray.length - count);
}

answer.forEach((item) => console.log(item));

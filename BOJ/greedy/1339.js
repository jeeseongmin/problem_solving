// 백준 > 단어 수학
let [n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

let obj = {};

for (let i = 0; i < n; i++) {
  let targetArr = arr[i];
  for (let w = 0; w < targetArr.length; w++) {
    let value = 10 ** (targetArr.length - 1 - w);
    if (obj[targetArr[w]]) obj[targetArr[w]] += value;
    else obj[targetArr[w]] = value;
  }
}

let sorted = Object.values(obj).sort((a, b) => b - a);

console.log(
  sorted.reduce((acc, cur, index) => {
    return acc + cur * (9 - index);
  }, 0)
);

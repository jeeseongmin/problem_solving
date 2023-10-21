// 백준 > 세탁소 사장 동혁
let [n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");
arr = arr.map((item) => Number(item));
let answer = [];

for (let i = 0; i < n; i++) {
  let rest = arr[i];
  let money = [25, 10, 5, 1];
  let result = [];
  money.forEach((item) => {
    if (rest >= item) {
      result.push(Math.floor(rest / item));
      rest = rest % item;
    } else result.push(0);
  });
  answer.push(result);
}
for (let i = 0; i < answer.length; i++) {
  console.log(answer[i].join(" "));
}

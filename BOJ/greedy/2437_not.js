// 백준 > 저울
[n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr[0]
  .split(" ")
  .map((item) => Number(item))
  .sort((a, b) => a - b);

let ans = 0;

for (let i = 0; i < n; i++) {
  console.log(i, arr[i], ans);

  if (arr[i] > ans + 1) {
    break;
  }
  ans += arr[i];
}
console.log(ans + 1);

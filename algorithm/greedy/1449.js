// 백준 > 수리공 항승
[a, arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

let [N, tape] = a.split(" ").map((item) => item * 1);
arr = arr
  .split(" ")
  .map((item) => item * 1)
  .sort((a, b) => a - b);

let count = 0;

let passed = 0;

// 테이프 길이
for (let i = 0; i < arr.length; i++) {
  if (passed < arr[i]) {
    count++;
    passed = arr[i] - 0.5 + tape;
  }
}

console.log(count);

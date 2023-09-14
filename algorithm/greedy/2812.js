// 백준 > 큰수 만들기
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[n, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");

[N, K] = n.split(" ").map((item) => item * 1);
arr = arr[0].split("").map((item) => item * 1);

let cnt = K;
let stack = [arr[0]];

for (let i = 1; i < arr.length; i++) {
  while (arr[i] > stack[stack.length - 1] && cnt > 0) {
    stack.pop();
    cnt--;
  }
  stack.push(arr[i]);
}

console.log(stack.slice(0, N - K).join(""));

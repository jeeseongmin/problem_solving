// 센서
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";

[N, K, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");

arr = arr[0]
  .split(" ")
  .map((item) => item * 1)
  .sort((a, b) => a - b);

let distance = [];
for (let i = 0; i < arr.length - 1; i++) {
  let dist = arr[i + 1] - arr[i];
  distance.push(dist);
}

console.log(
  distance
    .sort((a, b) => b - a)
    .slice(K - 1, distance.length)
    .reduce((acc, cur) => (acc += cur), 0)
);

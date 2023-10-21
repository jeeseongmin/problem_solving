// 백준 > 행렬
[n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

[N, M] = n.split(" ").map((item) => item * 1);
before = arr
  .splice(0, N)
  .map((item) => item.split("").map((element) => element * 1));
after = arr
  .splice(0, N)
  .map((item) => item.split("").map((element) => element * 1));

let count = 0;

for (let y = 0; y < N - 2; y++) {
  for (let x = 0; x < M - 2; x++) {
    if (before[y][x] !== after[y][x]) {
      reverse(x, y);
      count++;
    }
  }
}

for (let y = 0; y < N; y++) {
  for (let x = 0; x < M; x++) {
    if (before[y][x] !== after[y][x]) {
      count = -1;
      break;
    }
  }
}
console.log(count);

function reverse(i, j) {
  for (let b = 0; b < N; b++) {
    for (let a = 0; a < M; a++) {
      if (i <= a && a <= i + 2 && j <= b && b <= j + 2) {
        before[b][a] = before[b][a] === 1 ? 0 : 1;
      }
    }
  }
}

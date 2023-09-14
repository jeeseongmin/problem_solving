// 백준 > 유기농 배추
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[T, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
count = Array.from({ length: T }, () => 0);
let field;
let M, N, K;
let pos = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

for (let i = 0; i < T * 1; i++) {
  [M, N, K] = arr
    .shift()
    .split(" ")
    .map((item) => item * 1);
  field = Array.from({ length: N }, () => Array.from({ length: M }, () => 0));

  for (let j = 0; j < K; j++) {
    let [y, x] = arr
      .shift()
      .split(" ")
      .map((item) => item * 1);
    field[x][y] = 1;
  }

  for (let a = 0; a < field.length; a++) {
    for (let b = 0; b < field[0].length; b++) {
      if (field[a][b] !== 0) {
        count[i]++;
        dfs(a, b);
      }
    }
  }
}

function dfs(_a, _b) {
  field[_a][_b] = 0;
  for (let t = 0; t < 4; t++) {
    let nextX = _a + pos[t][0];
    let nextY = _b + pos[t][1];
    if (
      0 <= nextX &&
      nextX < N &&
      0 <= nextY &&
      nextY < M &&
      field[nextX][nextY] === 1
    ) {
      dfs(nextX, nextY);
    }
  }
}

console.log(count.join("\n"));

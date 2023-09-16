// BOJ 2667 : 단지번호붙이기
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[n, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
arr = arr.map((item) => {
  return item.split("").map((elem) => elem * 1);
});
n = n * 1;

visited = [...arr].map((item) => {
  return item.map((elem) => false);
});

let count = 0;
let pos = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

for (let x = 0; x < arr.length; x++) {
  for (let y = 0; y < arr[0].length; y++) {
    if (arr[x][y] !== 0 && !visited[x][y]) {
      count++;
      dfs(x, y);
    }
  }
}

function dfs(_x, _y) {
  arr[_x][_y] = count;
  visited[_x][_y] = true;
  for (let i = 0; i < pos.length; i++) {
    let nextX = _x + pos[i][0];
    let nextY = _y + pos[i][1];
    if (
      0 <= nextX &&
      nextX <= n - 1 &&
      0 <= nextY &&
      nextY <= n - 1 &&
      arr[nextX][nextY] !== 0 &&
      !visited[nextX][nextY]
    ) {
      dfs(nextX, nextY);
    }
  }
}

let answer = Array.from({ length: count }, (v, i) => 0);
for (let x = 0; x < arr.length; x++) {
  for (let y = 0; y < arr[0].length; y++) {
    if (arr[x][y] !== 0) {
      answer[arr[x][y] - 1]++;
    }
  }
}
console.log(count);
console.log(answer.sort((a, b) => a - b).join("\n"));

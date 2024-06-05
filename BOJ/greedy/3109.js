const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";
const input = require("fs").readFileSync(path).toString().trim();
// [n, ...arr] = require('fs').readFileSync(path).toString().trim().split('\n');
[option, ...arr] = input.split("\n");
[R, C] = option.split(" ").map((item) => item * 1);
arr = arr.map((line) => line.split(""));

/**
 * 첫째 열부터 DFS 돌리기
 * 1. 우선순위는 오른쪽 대각선 위, 오른쪽, 오른쪽 아래 순서대로 진행. 가능한 경우 count 값으로 매핑
 */

let count = 1;
const history = arr.map((v) => [...v]);
const dx = [-1, 0, 1];
const dy = [1, 1, 1];
let answer = false;

for (let row = 0; row < R; row++) {
  answer = false;
  dfs(row, 0);
}

console.log(count - 1);

function dfs(x, y) {
  history[x][y] = count;

  if (y === C - 1) {
    answer = true;
    count++;
    return;
  }

  for (let i = 0; i < 3; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];
    if (nx < 0 || ny < 0 || nx >= R || ny >= C) continue;
    if (history[nx][ny] !== ".") continue;
    dfs(nx, ny);
    if (answer) return;
  }
}

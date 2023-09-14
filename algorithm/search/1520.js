const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
// 1.하나의 값을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim();
// const input = require('fs').readFileSync(path).toString().trim();
// 2. 공백으로 구분된 한 줄의 값들을 입력받을 때
// const input = require('fs').readFileSync(path).toString().trim().split(' ');
[n, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
[col, row] = n.split(" ").map(Number);
let count = 0;
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];
board = arr.map((item) => item.split(" ").map(Number));
dp = Array.from({ length: col }, () => Array.from({ length: row }, () => -1));

function dfs(_col, _row) {
  console.log("dfs", _col, _row);
  if (_col === col - 1 && _row === row - 1) return 1;

  if (dp[_col][_row] !== -1) return dp[_col][_row];

  let count = 0;
  for (let i = 0; i < 4; i++) {
    nx = _col + dx[i];
    ny = _row + dy[i];

    if (nx < 0 || nx >= col || ny < 0 || ny >= row) continue;
    if (board[nx][ny] < board[_col][_row]) {
      count += dfs(nx, ny);
    }
  }
  dp[_col][_row] = count;
  return count;
}

console.log(dfs(0, 0));
console.log(dp);

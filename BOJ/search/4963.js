// BOJ 4963 : 섬의 개수
// link : https://www.acmicpc.net/problem/4963

const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";
input = require("fs").readFileSync(path).toString().trim().split("\n");

/**
 * 여러 개의 배열 별로 solution 함수를 호출
 */
while (input.length > 0) {
  const [a, b] = input.shift().split(" ").map(Number);

  if (a === 0 && b === 0) break;
  const arr = [];

  for (let i = 0; i < b; i++) {
    const _arr = input.shift().split(" ").map(Number);
    arr.push(_arr);
  }
  solution(arr, a, b);
}

/**
 * dfs로 상하좌우, 대각선 모두 체크하여 한바퀴 돌면 count++
 */
function solution(board, colLen, rowLen) {
  let count = 0;
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      if (board[i][j] === 1) {
        dfs(board, i, j);
        count++;
      }
    }
  }
  console.log(count);
}

function dfs(board, x, y) {
  board[x][y] = 0;
  let dx = [1, -1, 0];
  let dy = [1, -1, 0];

  for (let i = 0; i < dx.length; i++) {
    for (let j = 0; j < dy.length; j++) {
      nx = x + dx[i];
      ny = y + dy[j];

      if (
        0 <= nx &&
        nx < board.length &&
        0 <= ny &&
        ny < board[0].length &&
        board[nx][ny] === 1
      ) {
        dfs(board, nx, ny);
      }
    }
  }
}

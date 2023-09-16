// BOJ 2468 : 안전영역
// link : https://www.acmicpc.net/problem/2468

/**
 * comment
 * 높이는 1~100인데, 아무 지역도 안잠길 수도 있기 떄문에 정답의 최솟값은 1이 되어야 한다.
 * 따라서 마지막에 max체크를 해줘야한다.
 */
const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";

[height, ...arr] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split("\n");

let max = 2;
let min = 100;

arr.map((item) =>
  item.split(" ").map((elem) => {
    max = Math.max(elem, max);
    min = Math.min(elem, min);
  })
);

function solution(N, board) {
  let count = 0;
  for (let i = 0; i < height; i++) {
    for (let j = 0; j < height; j++) {
      if (board[i][j] === 1) {
        dfs(board, i, j);
        count++;
      }
    }
  }
  return count;
}
function dfs(board, x, y) {
  let dx = [0, 0, -1, 1];
  let dy = [1, -1, 0, 0];
  board[x][y] = 0;

  for (let t = 0; t < 4; t++) {
    nx = x + dx[t];
    ny = y + dy[t];
    if (
      0 <= nx &&
      nx < board.length &&
      0 <= ny &&
      ny <= board.length &&
      board[nx][ny] === 1
    )
      dfs(board, nx, ny);
  }
}

function answer() {
  let maxValue = 0;

  for (let i = 100; i >= 1; i--) {
    ground = arr.map((item) =>
      item.split(" ").map((elem) => {
        if (elem > i) return 1;
        else return 0;
      })
    );
    maxValue = Math.max(maxValue, solution(i, ground));
  }
  return maxValue;
}

console.log(Math.max(answer(), 1));

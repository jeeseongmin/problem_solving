// BOJ 2206 : 벽 부수고 이동하기
// link : https://www.acmicpc.net/problem/2206
const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";

[a, ...arr] = require("fs").readFileSync(path).toString().trim().split("\n");
const [N, M] = a.split(" ").map(Number);
console.log(N, M);
arr = arr.map((item, index) => item.split("").map(Number));
let Min = N * M;

const dx = [0, 0, 1, -1];
const dy = [1, -1, 0, 0];

/**
 * 1. board 값이 0이고 visited가 0일 때 , dfs 진행
 *    이때 visited는 1로 체크
 * 2. 결국 x, y가 n-1, m-1에 도달할 때 결국 min과 비교한다.
 */
function solution(board) {
  let queue = [];
  let visited = Array.from({ length: N }, () =>
    Array.from({ length: M }, () => 0)
  );

  // x, y, op(기회), len(길이)
  queue.push([0, 0, 1, 1]);

  while (queue.length > 0) {
    const [x, y, op, len] = queue.shift();
    console.log(x, y, op, len);
    if (x === N - 1 && y === M - 1) return len;
    visited[x][y] = 1;
    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      // visited가 체크되지 않아야 함.
      if (0 <= nx && nx < N && 0 <= ny && ny < M && visited[nx][ny] !== 1) {
        if (board[nx][ny] === 1 && op === 1)
          queue.push([nx, ny, op - 1, len + 1]);
        else if (board[nx][ny] === 0) queue.push([nx, ny, op, len + 1]);
      }
    }
  }
}

let answer = solution(arr);

console.log(answer ? answer : -1);

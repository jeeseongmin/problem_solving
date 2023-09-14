const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[n, ...board] = require("fs").readFileSync(path).toString().trim().split("\n");

[col, row] = n.split(" ").map(Number);
board = board.map((item) => {
  return item.split(" ").map(Number);
});
let dx = [0, 0, 1, -1];
let dy = [1, -1, 0, 0];
let ans = 0;

/**
 * 안전 지역 개수 세기 (bfs)
 */
const countingSafeZone = (arr) => {
  let cnt = 0;
  let queue = [];

  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 2) queue.push([i, j]);
    }
  }

  while (queue.length) {
    const [curX, curY] = queue.shift();

    for (let i = 0; i < 4; i++) {
      const [nx, ny] = [curX + dx[i], curY + dy[i]];

      if (nx >= 0 && nx < col && ny >= 0 && ny < row && arr[nx][ny] === 0) {
        arr[nx][ny] = 2;
        queue.push([nx, ny]);
      }
    }
  }
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (arr[i][j] === 0) cnt += 1;
    }
  }
  return cnt;
};

/**
 * 3개의 지점 지정하는 dfs
 */
const dfs = (cnt) => {
  // 3개의 벽이 생긴 경우에 안전 지역의 거리 세기
  if (cnt === 3) {
    let arr = board.map((v) => [...v]);
    let cntOfSave = countingSafeZone(arr);

    ans = Math.max(ans, cntOfSave);
    return;
  }

  // 백트래킹으로 3개의 지점 지정하기
  for (let i = 0; i < col; i++) {
    for (let j = 0; j < row; j++) {
      if (board[i][j] === 0) {
        board[i][j] = 1;
        dfs(cnt + 1);
        board[i][j] = 0;
      }
    }
  }
};

dfs(0);
console.log(ans);

const path = process.platform === "linux" ? "/dev/stdin" : "../../sample.txt";

const [N, M] = require("fs")
  .readFileSync(path)
  .toString()
  .trim()
  .split(" ")
  .map((item) => item * 1);

// 1. N이 1인 경우 => 못 움직인다.
if (N === 1) console.log(1);
// 2. N이 2인 경우 => 3, 4칸에 한번 움직일 수 있다.
else if (N === 2) console.log(Math.min(parseInt((M + 1) / 2), 4));
// 3. N이 3이지만, 7보다 작은 경우 => 4가지 방법을 모두 못 쓴다.
else if (N >= 3 && M < 7) console.log(Math.min(M, 4));
else console.log(M - 2);

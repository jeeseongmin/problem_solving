// 백준 > 거스름돈
const input = Number(
  require("fs").readFileSync("../sample.txt").toString().trim()
);

let answer = -1;
let limit = Math.floor(input / 5);

for (let i = limit; i >= 0; i--) {
  let res = input - 5 * i;
  let q = Math.floor(res / 2);
  let remain = Math.floor(res % 2);
  if (remain === 0) {
    answer = i + q;
    break;
  }
}

console.log(answer);

// 백준 > 숨박꼭질
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
const input = require("fs").readFileSync(path).toString().trim();
[N, K] = input.split(" ").map((item) => item * 1);

let queue = [N];
let array = Array.from({ length: 100002 }, () => 0);

// K -> N 까지
while (queue.length) {
  let target = queue.shift();

  if (target === K) {
    console.log(array[target]);
    return;
  }

  [target - 1, target + 1, target * 2].forEach((item) => {
    if (array[item] === 0 && 0 <= item && item <= 100000) {
      array[item] = array[target] + 1;
      queue.push(item);
    }
  });
}

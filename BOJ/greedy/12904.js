const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
[S, T] = require("fs").readFileSync(path).toString().trim().split("\n");
let word = T.split("");

while (word.length > 0) {
  let w = word.pop();
  if (w === "B") word.reverse();
  if (word.join("") === S) break;
}

console.log(word.length === 0 ? 0 : 1);

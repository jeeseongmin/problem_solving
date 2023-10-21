// 백준 > 폴리오미노
const path = process.platform === "linux" ? "/dev/stdin" : "../sample.txt";
const input = require("fs").readFileSync(path).toString().trim();

arr = input.split(".").filter((item) => item !== "");
let answer = [];
let result = "";

for (let i = 0; i < arr.length; i++) {
  if ((arr[i].length % 4) % 2 !== 0) {
    console.log(-1);
    return 0;
  } else {
    let A = Math.floor(arr[i].length / 4);
    let B = Math.floor((arr[i].length % 4) / 2);
    str = "AAAA".repeat(A) + "BB".repeat(B);
    answer.push(str);
  }
}

for (let i = 0; i < input.length; i++) {
  console.log(i, input[i], input);
  if (input[i] === ".") {
    result += input[i];
  } else if (answer.length > 0) {
    let target = answer.shift();
    result += target;
    i += target.length - 1;
  }
}

console.log(result);

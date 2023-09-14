// 백준 > 강의실 배정 : 꽤 어려움
[n, ...arr] = require("fs")
  .readFileSync("../sample.txt")
  .toString()
  .trim()
  .split("\n");

arr = arr
  .map((item) => item.split(" ").map((element) => element * 1))
  .sort((a, b) => a[0] - b[0]);
let times = [];
arr.forEach((item) => {
  times.push({ time: item[0], flag: 1 });
  times.push({ time: item[1], flag: -1 });
});
let answer = 0;
let rooms = 0;

times
  .sort((a, b) => a.time - b.time)
  .forEach((item) => {
    rooms += item.flag;
    answer = rooms > answer ? rooms : answer;
  });

console.log(answer);

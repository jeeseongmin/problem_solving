// 백준 > 펠린드롬 만들기
const input = require("fs").readFileSync("../sample.txt").toString().trim();

// 먼저 각 알파벳 별로 몇 개씩 존재하는지 object를 생성한다.
// 그리고 object에서 length % 2가 0일 때 object.values가 %2인 것이 === 1 이거나
// object에서 length % 2가 1일 때 object.values가 %2인 것이 ===0개이면 I'm Sorry Hansoo를 출력한다.
// 아니라면 두 케이스에 나눠서 펠린드롬을 생성한다.
// 짝수인 경우에는 모든 values를 /2한만큼 string에 붙인다.
// 앞에 붙이고 뒤에는 reverse시킨다.
// 홀수인 경우에는 values%2===1 인 것을 -1하고 unique로 뺀 뒤에, 나머지는 /2한만큼 string에 붙인다.
// 앞에 붙이고 unique 붙이고 뒤에 reverse붙인다.

let dict = {};
let unique = "";
let half = "";
input.split("").map((item) => {
  if (dict[item]) dict[item] += 1;
  else dict[item] = 1;
});

if (
  (input.length % 2 === 0 &&
    Object.values(dict).filter((item) => {
      return item % 2 === 1;
    }).length > 0) ||
  (input.length % 2 === 1 &&
    Object.values(dict).filter((item) => {
      return item % 2 === 1;
    }).length > 1)
) {
  console.log("I'm Sorry Hansoo");
  return 0;
}

Object.keys(dict).map((item) => {
  if (dict[item] % 2 === 1) {
    unique = item;
    if (dict[item] === 1) delete dict[item];
    else half += item.repeat((dict[item] - 1) / 2);
  } else {
    half += item.repeat(dict[item] / 2);
  }
});
half = half.split("").sort().join("");

console.log(half + unique + half.split("").reverse().join(""));

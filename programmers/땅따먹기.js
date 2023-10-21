// link : https://school.programmers.co.kr/learn/courses/30/lessons/12913?language=javascript#
/**
 * 이 문제를 풀 때의 패착
 * 처음에는 answer라는 land[0]과 같은 배열부터 시작하여 한 줄 씩 더해가려고 했었다.
 * 테스트케이스에서는 잘 됐었는데, 문제를 제출하려고만 하면 안되는 상황을 마주했다.
 * 무엇이 문제인지 생각해보니, 더해가는 기준이 첫 행에 고정이고, 나머지 행들이 수동적으로 더해지는 모양으로 풀고 있었다.
 * 첫 행에 더해가는 것이 아니라 이전 행이 다음 행에 추가되는 식으로 되어야한다.
 */
function solution(land) {
  var answer = [...land[0]];

  for (let i = 1; i < land.length; i++) {
    for (let j = 0; j < answer.length; j++) {
      // 해당 로우에서 index가 같지 않은 것 중에서의 최대값을 더함.

      land;
    }
  }

  return Math.max(...answer);
}

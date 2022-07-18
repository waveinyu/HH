// 두 정수 a, b가 주어졌을 때 a와 b 사이에 속한 모든 정수의 합을 리턴하는 함수, solution을 완성하세요.
// 예를 들어 a = 3, b = 5인 경우, 3 + 4 + 5 = 12이므로 12를 리턴합니다.

// 입출력 예
// a	b	return
// 3	5	12
// 3	3	3
// 5	3	12

function solution(a, b) {
  let answer = 0;

  if (a < b) {
    for (let i = a; i <= b; i++) {
      answer += i;
      // console.log(answer);
    }
  } else {
    for (let i = b; i <= a; i++) {
      answer += i;
      // console.log(answer);
    }
  }

  return answer;
}

console.log(solution(5, 3));

//홀랭.. 양끝의 합 * 개수 / 2
function solution2(c, d) {
  return ((c + d) * (Math.abs(d - c) + 1)) / 2;
}

console.log(solution2(5, 3));
